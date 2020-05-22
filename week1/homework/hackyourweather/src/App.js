import React from 'react';
import './App.css';
import CityCard from './CityCard';
import weatherList from './city-weather.json'

function App() {
  return (
    <div className="App">
      <h1> Weather </h1>
{
    weatherList.map((city) => {
        return (
          <CityCard
            name={city.name}
            countryCode={city.sys.country}
            mainWeather={city.weather[0].main}
            description={city.weather[0].description}
            temp_min={city.main.temp_min}
            temp_max={city.main.temp_max}
            longitude={city.coord.lon}
            latitude={city.coord.lat}
          />
        );
      })}
    </div>
  );
  
}

export default App;
