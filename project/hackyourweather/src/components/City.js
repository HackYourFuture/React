import React from "react";
import "./city.css";

const City = ({ data }) => {
  const { name, sys, weather, main, coord } = data;
  let weatherDescription;
  if (weather[0].description === "clear sky") {
    weatherDescription = "description__sunny";
  } else if (weather[0].description === "few clouds") {
    weatherDescription = "description__few__clouds";
  } else if (
    weather[0].description === "scattered clouds" ||
    weather[0].description === "broken clouds"
  ) {
    weatherDescription = "description__scattered__clouds";
  } else if (weather[0].description === "shower rain") {
    weatherDescription = "description__shower__rain";
  } else if (weather[0].description === "rain") {
    weatherDescription = "description__rain";
  } else if (weather[0].description === "thunderstorm") {
    weatherDescription = "description__thunderstorm";
  } else if (weather[0].description === "snow") {
    weatherDescription = "description__snow";
  } else {
    weatherDescription = "description__mist";
  }
  return (
    <div>
      <div className={weatherDescription}>
        <h1 className="city__name">{`${name}, ${sys.country}`}</h1>
        <div className="weather__info">
          <h2>{weather.map((m) => m.main)}</h2>
          <p>{weather.map((d) => d.description)}</p>
        </div>
        <div className="temp__info">
          <p>{`max temp: ${(main.temp_max - 273.15).toFixed(2)} C`}</p>
          <p>{`min temp: ${(main.temp_min - 273.15).toFixed(2)} C`}</p>
        </div>
        <div className="city__coords">
          <p>{`location: ${coord.lon}, ${coord.lat}`}</p>
        </div>
      </div>
    </div>
  );
};
export default City;
