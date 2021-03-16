import React from 'react';
import CityWeather from './city-weather.json';

function CityDetails(props) {
  const {
    cityName,
    countryName,
    weatherMain,
    weatherDescription,
    maxTemperature,
    minTemperature,
    longitude,
    latitude,
  } = props;

  return (
    <div className="weather_container">
      <h1 className="city_name" key={cityName}>
        {cityName}, <span className="country_name">{countryName} </span>
      </h1>

      <h2 className="weather_main">
        {weatherMain}
        <span className="weather_description">{weatherDescription}</span>
      </h2>

      <h4 className="max_temperature">Max temp : {maxTemperature}</h4>
      <h4 className="min_temperature">Min temp : {minTemperature}</h4>
      <h4 className="location">
        Location : {longitude} , {latitude}
      </h4>
    </div>
  );
}

function Cities() {
  return (
    <div>
      {CityWeather.map((data) => (
        <CityDetails
          key={data.name}
          cityName={data.name}
          countryName={data.sys.country}
          weatherMain={data.weather[0].main}
          weatherDescription={data.weather[0].description}
          maxTemperature={data.main.temp_max}
          minTemperature={data.main.temp_min}
          longitude={data.coord.lon}
          latitude={data.coord.lat}
        />
      ))}
    </div>
  );
}

export default Cities;
