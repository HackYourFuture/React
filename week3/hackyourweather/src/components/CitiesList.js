import React, { useState } from "react";
import CityInfo from "./CityInfo";
import Form from "./Form";

const CitiesList = () => {
  const [weather, setWeather] = useState([]);
  const [status, setStatus] = useState("");
  const [welcome, setWelcome] = useState(
    "Welcome to my app, type city name to show currently weather information "
  );
  const [errorMessage, setErrorMessage] = useState("");
  async function getCity(city) {
    setErrorMessage("");
    setWelcome("");
    setStatus("loading");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather([data,...weather]);
        setStatus("success");
        setErrorMessage("");
      } else {
        setErrorMessage("Please insert valid city name");
        setStatus("");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Error: Failed to fetch");
    }
  }
  function deleteCity(ID) {
    const removedItem = weather.filter(weather => weather.id !== ID);
    setWeather(removedItem);
  }
  
  return (
    <div className="city-item">
      <Form getCity={getCity} />
      <h2>{welcome}</h2>
      {status === "loading" && <h2 className="status">Loading....</h2>}
      {(status === "error" || errorMessage !== "") && <h1>{errorMessage}</h1>}
      <ul>{status === "success" && 
        weather.map(city => (
        <li className="items" key={city.id}>
          <CityInfo city={city} deleteCity={deleteCity}/>
        </li>        
      ))}
    </ul>
    </div>
  );
};

export default CitiesList;
