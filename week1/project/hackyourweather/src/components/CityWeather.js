import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import weatherData from './../city-weather.json';

const cityInfo = weatherData.map(({ name, coord, sys, main, weather }) => {
  return (
    <div className="city-weather" key={uuidv4()}>
      <h3>
        {name}, {sys.country}
      </h3>
      <div>
        <h4>{weather[0].main}</h4>
        <p>{weather[0].description}</p>
      </div>
      <div className="temp">
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>
          location: {coord.lon} , {coord.lat}
        </p>
      </div>
    </div>
  );
});

const CityWeather = () => {
  return <div className="cityInfo">{cityInfo}</div>;
};
export default CityWeather;
