import React from "react";

const WeatherDetails = ({ min_temp, max_temp, lat, lon }) => {
  return (
    <div>
      <ul>
        <li key={min_temp.toString(2)}>min_temp: {min_temp}</li>
        <li key={max_temp.toString(2)}>max_temp: {max_temp}</li>
        <li key={lat + lon.toString(2)}>
          location: {lat} ,{lon}
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
