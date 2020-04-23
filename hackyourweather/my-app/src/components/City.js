import React from 'react';
import CityName from './CityName';
import WeatherInfo from './WeatherInfo';
import Details from './Details';
import '../App.css'
import CloseButton from './CloseButton'

function City({ name, weatherKind, weatherDescription, minTemp, maxTemp, lat, lon, handleClose}) {
	return (
		<div className="cityCard">
            <CloseButton handleClose={handleClose}/> 
			<CityName name={name} />
			<WeatherInfo
					weatherKind={weatherKind}
					weatherDescription={weatherDescription}
				/>
			<Details
					minTemp={minTemp}
					maxTemp={maxTemp}
					lat={lat}
					lon={lon}
				/> 
		</div>
	);
}

export default City;
