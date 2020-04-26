import React, { useState } from 'react';
import Form from './Form';
import City from './City';

export default function Main() {
	const [ city, setCity ] = useState({});
	const [ cities, setCities ] = useState([]);
	const [ searchText, setSearchText ] = useState('');
	const [ isLoading, setLoading ] = useState(false);
	const [ errMessage, setErrMessage ] = useState(null);

	const APIKEY = '874a1b8c00dacaa9d15a7e520e259b16';

	const fetchWeather = (city) => {
		setLoading(true);
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${APIKEY}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.cod === 200) {
					setCity(data);
					setCities([ data, ...cities ]);
				} else {
					setErrMessage('The city is not found');
				}
			})
			.catch((err) => setErrMessage(err.message))
			.finally(() => setLoading(false));
	};

	const onChange = (e) => {
		setSearchText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		fetchWeather(searchText);
	};
	const deleteCity = (id) => {
		const remainCities = cities.filter((city) => city.id !== id);
		setCities(remainCities);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (errMessage) {
		return <div>{errMessage}</div>;
	}
	return (
		<div>
			<Form onChange={onChange} onSubmit={onSubmit} city={city} />
			{cities.map((city) => (
				<div key={city.id}>
					<City city={city} deleteCity={deleteCity} />
				</div>
			))}
		</div>
	);
}
