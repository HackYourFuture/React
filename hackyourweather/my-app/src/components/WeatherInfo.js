import React from 'react'

function WeatherInfo ({ weatherKind, weatherDescription }) {
  return (
    <div>
      <h2>{weatherKind}</h2>
      <p>{weatherDescription}</p>
    </div>
  )
}

export default WeatherInfo
