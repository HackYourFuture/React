import React from "react";

const WeatherDesc = ({ weather, weather_desc }) => {
  return (
    <div>
      <h3>{weather}</h3>
      <p>{weather_desc}</p>
    </div>
  );
};

export default WeatherDesc;
