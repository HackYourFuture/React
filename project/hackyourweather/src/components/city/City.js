import React from "react";
import "/Users/alejandrourroz/Desktop/hyf/React/project/hackyourweather/src/styles/city.css";

const City = ({ data }) => {
  return (
    <div>
      {data.map((city, index) => {
        let weatherDescription = "";
        const description = city.weather[0].description.replace(" ", "__");
        weatherDescription = `description__${description}`;
        return (
          <div
            className={weatherDescription}
            key={index}
            data-testid={`city-element-${index}`}
          >
            <h1 className="city__name">{`${city.name}, ${city.sys.country}`}</h1>
            <div className="weather__info">
              <h2>{city.weather[0].main}</h2>
              <p>{city.weather[0].description}</p>
            </div>
            <div className="temp__info">
              <p>{`max temp: ${(city.main.temp_max - 273.15).toFixed(2)} C`}</p>
              <p>{`min temp: ${(city.main.temp_min - 273.15).toFixed(2)} C`}</p>
            </div>
            <div className="city__coords">
              <p>{`location: ${city.coord.lon}, ${city.coord.lat}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default City;
