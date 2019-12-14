import React from 'react'
import Weather from '../components/weather'

function Home() {
    return (
        <div className="home">
            <h1 className="weather_title">Weather</h1>
            <Weather />
        </div>
    )
}

export default Home
