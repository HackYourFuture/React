import React from 'react';
import CityWeather from './CityWeather';

const Weather = () => {
  return (
    <>
      <div className="container">
        <div className="weather">
          <h1>Weather</h1>
          <CityWeather />
        </div>
      </div>
    </>
  );
};
export default Weather;
