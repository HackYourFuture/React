import React from "react";

const WeatherDetails = ({ min_temp, max_temp, lat, lon, index }) => {
  return (
    <div>
      <ul>
        <li key={index}>min_temp: {min_temp}</li>
        <li key={index}>max_temp: {max_temp}</li>
        <li key={index}>
          location: {lat} ,{lon}
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
