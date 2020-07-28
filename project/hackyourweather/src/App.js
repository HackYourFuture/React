import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import CityList from './Components/CityList.jsx';

function App() {
  const [weatherData, setWeatherData] = useState([])
  return (
    <div className="App">
      
        <h1 className="title">Weather App</h1>
        <Search weatherData={weatherData} setWeatherData={setWeatherData}/>
        {weatherData.length > 0 ? <CityList setWeatherData={setWeatherData} weatherData={weatherData}></CityList> : <p>Please Write the city name to get its current weather </p> }

    </div>
  );
}

export default App;