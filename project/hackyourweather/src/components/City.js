import React, { useState } from "react";
import "./city.css";

const City = () => {
  const [city, setCity] = useState("");
  return (
    <div>
      {city.map((item) => (
        <div className="city__container">
          <h1>{`${item.name}, ${item.sys.country}`}</h1>
          <div className="weather__info">
            <h2>{item.weather.map((m) => m.main)}</h2>
            <p>{item.weather.map((d) => d.description)}</p>
          </div>
          <div className="temp__info">
            <p>{`max temp: ${(item.main.temp_max - 273.15).toFixed(2)} C`}</p>
            <p>{`min temp: ${(item.main.temp_min - 273.15).toFixed(2)} C`}</p>
          </div>
          <div className="city__coords">
            <p>{`location: ${item.coord.lon}, ${item.coord.lat}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default City;
