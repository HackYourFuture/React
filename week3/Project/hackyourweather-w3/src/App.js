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
import DeleteButton from "./components/DeleteButton";

function App() {
  const [cityList, setCityList] = useState([]);
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
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
      setCityList([weatherData, ...cityList]);
      setStatus("Success");

      // const duplicatedCity = cityList.filter(city => city === weatherData);
      // console.log(duplicatedCity);
    } catch (err) {
      console.log(err.message);
      setStatus("Error");
      setErrorMessage(err.message);
    }
  }

  const getWeatherOnClick = useCallback(
    city => {
      fetchWeather(city);
    },
    [cityList]
  );

  const deleteItem = cityToDelete => {
    const newList = cityList.filter(city => city.id !== cityToDelete);
    setCityList(newList);
  };

  return (
    <div>
      <Title title="Weather" />
      <Search handleSubmit={city => getWeatherOnClick(city)} />
      {status === "" && (
        <UserFeedback
          text=" You haven't searched any city yet. Start searching by writing the name
        of the city you would like to know."
        />
      )}
      {status === "Loading" && <p className="loading">Loading...</p>}
      {status === "Success" &&
        cityList.map(city => (
          <React.Fragment>
            <WeatherCards key={uuid()} id={city.id}>
              <CountryNames
                country_name={city.name}
                country_code={city.sys.country}
              />

              <WeatherDetails
                min_temp={kelvinToCelsius(city.main.temp_min).toFixed(1)}
                max_temp={kelvinToCelsius(city.main.temp_max).toFixed(1)}
                lat={city.coord.lat}
                lon={city.coord.lon}
              />
              <DeleteButton deleteItem={() => deleteItem(city.id)} />
            </WeatherCards>
          </React.Fragment>
        ))}
      {status === "Error" && (
        <UserFeedback text={errorMessage} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
