import React from 'react';

const Hackyourweather = ({ cityName, countryName, weatherMain, weatheDescription, temp_min, temp_max, lon, lat }) => {
	return (
		<div className="main">
			<h3>
				{cityName},{countryName}
			</h3>
			<div className="weatherMain">
				<h5>{weatherMain}</h5>
				<p> {weatheDescription} </p>
			</div>
			<p> min temp: {temp_min} °C </p>
			<p> max temp: {temp_max} °C </p>
			<p>
				location: {lon}, {lat}
			</p>
		</div>
	);
};

export default Hackyourweather;
