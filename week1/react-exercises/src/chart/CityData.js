import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function CityData({ city }) {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ errMessage, setErrMessage ] = useState(null);
	const [ data, setData ] = useState([]);
	const params = useParams();

	useEffect(
		() => {
			getForecast();
		},
		[ params.id ]
	);

	const getForecast = () => {
		setIsLoading(true);
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?id=${params.id}&units=metric&appid=${process.env
				.REACT_APP_OPENWEATHERMAP_API_KEY}`
		)
			.then((res) => res.json())
			.then((json) => {
				setIsLoading(false);
				setData(json.list);
			})
			.catch((err) => setErrMessage(err.message));
	};

	if (isLoading) {
		return <div>Wait a little please</div>;
	}
	if (errMessage) {
		return <div>{errMessage}</div>;
	}
	return (
		<div>
			<h3>
				{city.name}, {city.sys.country}
			</h3>
			<div className="graph">
				<AreaChart
					width={750}
					height={250}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="dt_txt" />
					<YAxis dataKey="main.temp" />
					<Tooltip />
					<Area type="monotone" dataKey="main.temp" stroke="blue" fill="#222" />
				</AreaChart>
			</div>
			<div>
				<Link style={{ color: 'black' }} to="/">
					Back
				</Link>
			</div>
		</div>
	);
}
