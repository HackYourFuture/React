import React, { useState } from 'react';
import CityName from './CityName'
import Info from './WeatherInfo'
import Temp from './Temp'
import Form from './Form'

function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [loading, setLoading] = useState(false)

    async function getCity(cityName) {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            const data = await res.json()
            setWeatherInfo(data)
            setLoading(true)
        }
        catch (error) {
            if (error) {
                setLoading(false)
                console.error(error.message);
            }
        }

    }

    return (
        <div className="city_list">
            <Form onSubmitForm={cityName => getCity(cityName)} />
            {Object.entries(weatherInfo).length === 0 && <p className="insert_alert">Type city name </p>}
            {loading === true &&
                <div className="city_info">
                    <ul className="info_list">
                        <CityName city={weatherInfo} />
                        <Info item={weatherInfo} /> 
                        <Temp city={weatherInfo} />
                    </ul>
                </div>
            }
        </div>
    )
}

export default Weather;