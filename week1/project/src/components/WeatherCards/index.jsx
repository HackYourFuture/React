import React from "react";
import "./WeatherCards.css";

const WeatherCards = ({ children }) => {
  return <div className="weather-card">{children}</div>;
};

export default WeatherCards;
