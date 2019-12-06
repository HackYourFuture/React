import React, { useState } from 'react';
import CityName from './CityName'
import Info from './WeatherInfo'
import Temp from './Temp'
import Form from './Form'

function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [wrong, setWrong] = useState(true)

    const getCity = async (e) => {
        e.preventDefault();
        const city = e.target.elements.cityName.value

        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            if (res.ok){
                const data = await res.json()
                setWeatherInfo(data)
                setLoading(true)
                setWrong(true)
            }else{
                setWrong(false)
                throw new Error();
            }
        }
        catch (error) {       
                setLoading(false)
                console.error(error.message);
        }
    }


    return (
        <div className="city_info">
            <Form getCity={getCity} />
            {loading === true &&           
                        <ul className="info_list" >
                            <CityName city={weatherInfo} />
                            <Info item={weatherInfo.weather[0]} />
                            <Temp city={weatherInfo} />
                        </ul>
            }
            {loading === false && <h4 className="advise">Please insert city name.</h4>}
            { wrong === false && <h4 className="warning">Check city name...</h4>}
        </div>
    )
}

export default Weather;