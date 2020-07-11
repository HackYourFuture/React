import React from 'react';
import './App.css';
import Hackyourweather from './Project/Hackyourweather';
import DataCities from './Project/city-weather.json';

function App() {
	const kelvinToCelcius = (kelvin) => {
		return (kelvin - 273).toFixed(2);
	};
	return (
		<div className="App">
				<h1> Weather </h1>
				<div>
					{DataCities.map((city) => (
						<Hackyourweather
							key={city.id}
							cityName={city.name}
							countryName={city.sys.country}
							weatherMain={city.weather[0].main}
							weatheDescription={city.weather[0].description}
							temp_min={kelvinToCelcius(city.main.temp_min)}
							temp_max={kelvinToCelcius(city.main.temp_max)}
							lon={city.coord.lon}
							lat={city.coord.lat}
						/>
					))}
				</div>
			</div>
		
	);
}

export default App;
