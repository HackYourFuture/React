import React from "react";
import datas from "./data/city-weather.json";
import WeatherCards from "./components/WeatherCards";
import CountryNames from "./components/CountryNames";
import WeatherDesc from "./components/WeatherDesc";
import WeatherDetails from "./components/WeatherDetails";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title title="Weather" />
      {datas.map((data, index) => {
        return (
          <WeatherCards key={index}>
            <CountryNames ctry_name={data.name} ctry_code={data.sys.country} />
            <WeatherDesc
              weather={data.weather.map(w => w.main)}
              weather_desc={data.weather.map(w => w.description)}
            />
            <WeatherDetails
              min_temp={data.main.temp_min}
              max_temp={data.main.temp_max}
              lat={data.coord.lat}
              lon={data.coord.lon}
            />
          </WeatherCards>
        );
      })}
    </div>
  );
}

export default App;
