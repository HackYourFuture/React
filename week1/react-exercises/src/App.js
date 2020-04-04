import React from 'react'
// import React, { useState } from 'react';
import './App.css'
// import Button from './button';
import Weather from './city-weather.json'
function App (props) {
  return (
    <div className='App'>
      <h2>Weather</h2>
      <div>
        {Weather.map(dtl => {
          return (
            <div className='weather'>
              <h1>
                {dtl.name}, {dtl.sys.country}
              </h1>
              <p>{dtl.weather[0].main}</p>
              <p>{dtl.weather[0].description}</p>
              <p>min temp: {(dtl.main.temp_min - 273.15).toFixed(2)}</p>
              <p>max temp: {(dtl.main.temp_max - 273.15).toFixed(2)}</p>
              <p>
                Location: {dtl.coord.lon}, {dtl.coord.lat}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App
