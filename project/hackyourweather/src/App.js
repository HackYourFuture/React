import React from 'react'
// import React, { useState } from 'react';
import './App.css'
// import Button from './button';
import Weather from './city-weather.json'
function App (props) {
  return (
    <div className='App'>
      <h1>Weather</h1>
      <div>
        {Weather.map(dtl => {
          return (
            <div className='weather'>
              <div>
                <h2>
                  {dtl.name}, {dtl.sys.country}
                </h2>
                <h3>{dtl.weather[0].main}</h3>
              </div>
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
