import React from "react";
import Button from "@material-ui/core/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const CityInfo = ({ city, deleteCity }) => {
  return (
    <div className="list-items">
      <Button
        className="btn"
        onClick={() => {
          deleteCity(city.id);
        }}
      >
        <HighlightOffIcon />{" "}
      </Button>
      <div>
        <h3>
          {city.name}, {city.sys.country}
        </h3>
      </div>
      <br />
      <div>{city.weather[0].main}</div>
      <div>{city.weather[0].description}</div>
      <br />
      <div>max temp : {city.main.temp_max}</div>
      <div>min temp : {city.main.temp_min}</div>
      <br />
      <div>
        location : {city.coord.lat}, {city.coord.lon}
      </div>
    </div>
  );
};

export default CityInfo;
