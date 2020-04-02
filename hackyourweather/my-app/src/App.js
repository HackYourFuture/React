import React from 'react';
import CityName from './CityName';
import WeatherInfo from './WeatherInfo';
import Details from './Details';  
import data from './data.json'; 
import './App.css';

console.log(data);

function App() {

  return (
    <div className="App">
      <h1 > Weather</h1> 
      <div> 
      {data.map(city=>{
        return(
        <div className="cityCard">
          <CityName name= {city.name} />
          <WeatherInfo weatherKind ={city.weather[0].main} weatherDescription={city.weather[0].description}/>
          <Details 
          minTemp = {city.main.temp_min} 
          maxTemp ={city.main.temp_max} 
          lon = {city.coord.lon}
          lat = {city.coord.lat}
          />
        </div>)
        })}
    </div>
    </div>
  );
}

export default App;
