import React, { useState } from 'react';
import Form from './Form';
import City from './City';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityData from './CityData';

export default function Main() {
	const [ city, setCity ] = useState({});
	const [ cities, setCities ] = useState([]);
	const [ searchText, setSearchText ] = useState('');
	const [ isLoading, setLoading ] = useState(false);
	const [ errMessage, setErrMessage ] = useState(null);

	const fetchWeather = (cityName) => {
		const APIKEY = require('./secret.json').API_KEY;
		setLoading(true);
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.cod === 200) {
					setCity(data);
					setCities([ data, ...cities ]);
					setErrMessage(null);
				} else {
					setErrMessage('The city is not found...');
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
		setCities(cities.filter((city) => city.id !== id));
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<div>
				<Form onChange={onChange} onSubmit={onSubmit} city={city} />
				<Switch>
					<Route path="/:id">{city.name && <CityData city={city} />}</Route>
					<Route path="/">
						{cities.map((city) => (
							<div key={city.id}>
								<City city={city} deleteCity={deleteCity} />
							</div>
						))}
						{errMessage && <div>{errMessage}</div>}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
