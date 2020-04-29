import React from 'react';
import CityWeather from './city-weather.json';

function WeatherData() {
	const weather = CityWeather.map((city, index) => (
		<div className="weatherCard" key={index}>
			<h2>
				{city.name}, {city.sys.country}
			</h2>
			<h3>{city.weather[0].main}</h3>
			<h4>{city.weather[0].description}</h4>
			<p>temp_max : {(city.main.temp_max - 273.15).toFixed(2)}</p>
			<p>temp_min : {(city.main.temp_min - 273.15).toFixed(2)}</p>

			<p>
				Location : {city.coord.lon},{city.coord.lat}
			</p>
		</div>
	));

	return <div>{weather}</div>;
}

export default WeatherData;
