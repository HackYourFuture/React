import React, { useCallback, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Title from "./components/Title";
import WeatherCards from "./components/WeatherCards";
import CountryNames from "./components/CountryNames";
import WeatherDesc from "./components/WeatherDesc";
import WeatherDetails from "./components/WeatherDetails";
import UserFeedback from "./components/UserFeedback";
import kelvinToCelsius from "kelvin-to-celsius";
import uuid from "uuid/v1";

function App() {
  const [cityWeatherInfo, setCityWeatherInfo] = useState("");
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchWeather(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      setStatus("Loading");
      if (!res.ok) {
        throw Error(
          "Uppss.. An error occurred while fetching the data. Make sure you don't have a typo on your input."
        );
      }
      const weatherData = await res.json();
      const { weather } = weatherData;
      setWeatherDesc(weather);
      setCityWeatherInfo(weatherData);
      setStatus("Success");
    } catch (err) {
      setStatus("Error");
      setErrorMessage(err.message);
    }
  }

  const getWeatherOnClick = useCallback(city => {
    fetchWeather(city);
  }, []);

  return (
    <div>
      <Title title="Weather" />
      <Search handleSubmit={city => getWeatherOnClick(city)} />
      {Object.entries(cityWeatherInfo).length === 0 && (
        <UserFeedback
          text=" You haven't searched any city yet. Start searching by writing the name
        of the city you would like to know."
        />
      )}
      {status === "Loading" && <p className="loading">Loading...</p>}
      {status === "Success" && (
        <React.Fragment>
          <WeatherCards>
            <CountryNames
              country_name={cityWeatherInfo.name}
              country_code={cityWeatherInfo.sys.country}
            />
            {weatherDesc.map(w => (
              <WeatherDesc
                weather={w.main}
                weather_desc={w.description}
                key={uuid()}
              />
            ))}
            <WeatherDetails
              min_temp={kelvinToCelsius(cityWeatherInfo.main.temp_min).toFixed(
                1
              )}
              max_temp={kelvinToCelsius(cityWeatherInfo.main.temp_max).toFixed(
                1
              )}
              lat={cityWeatherInfo.coord.lat}
              lon={cityWeatherInfo.coord.lon}
            />
          </WeatherCards>
        </React.Fragment>
      )}
      {status === "Error" && (
        <UserFeedback text={errorMessage} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
