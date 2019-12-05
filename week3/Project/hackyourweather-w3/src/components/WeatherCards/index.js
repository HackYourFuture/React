import React from "react";
import "./WeatherCards.css";

const WeatherCards = ({ id, children, getDetails }) => {
  return (
    <div className="weather-card" onClick={getDetails} id={id}>
      {children}
    </div>
  );
};

export default WeatherCards;
