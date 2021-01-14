import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CityWeather = ({ name, coord, sys, main, weather }) => {
  return (
    <div className="cityInfo">
      <div className="city-weather" key={uuidv4()}>
        <h2>
          {name}, {sys.country}
        </h2>
        <div style={{ marginTop: '.5rem' }}>
          <h3>{weather[0].main}</h3>
          <p style={{ fontWeight: 'bold' }}>{weather[0].description}</p>
        </div>
        <div className="temp">
          <p>min temp: {main.temp_min}°C</p>
          <p>max temp: {main.temp_max}°C</p>
          <p>
            location: {coord.lon} , {coord.lat}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CityWeather;
