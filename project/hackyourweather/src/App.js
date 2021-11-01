import "./App.css";
import data from "../src/city-weather.json";
import React, { useState } from "react";
import CityComponent from "../src/components/cityComponent";
const cityData = data;

function App() {
  const [city, setCity] = useState(cityData);
  return (
    <div className="App">
      <CityComponent city={city} />
    </div>
  );
}

export default App;
