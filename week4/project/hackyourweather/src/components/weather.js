import React, { useState } from 'react';
import CityName from './CityName'
import Info from './WeatherInfo'
import Temp from './Temp'
import Form from './Form'


function Weather() {
    const [weatherInfo, setWeatherInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isWrong, setIsWrong] = useState(true)

    const getCity = async (e) => {
        e.preventDefault();
        const city = e.target.elements.cityName.value

        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            if (res.ok){
                const data = await res.json()
                const noRepeatCities = weatherInfo.filter(city => city.id !== data.id)
                setWeatherInfo([data,...noRepeatCities])
                setIsLoading(true)
                setIsWrong(true)
            }else{
                setIsWrong(false)
                throw new Error('Oops something went wrong.');
            }
        }
        catch (error) {       
                setIsLoading(false)
                console.error(error.message);
        }
    }
    const removeItem = id => {
        const cities = weatherInfo.filter(city => city.id !== id);
        setWeatherInfo(cities)
    }


    return (
        <div className="city_info">
            <Form getCity={getCity} />
            {isLoading === true && weatherInfo.map((city) => {
                    return(
                        <ul className="info_list" key = {city.id}>
                            <CityName city={city} removeItem={removeItem} id={city.id}/>
                            <Info item={city.weather[0]} />
                            <Temp city={city} />
                        </ul>
                    )
            })          
            }
            {isLoading === false && <h4 className="advise">Please insert city name.</h4>}
            { isWrong === false && <h4 className="warning">Check city name...</h4>}
        </div>
    )
}

export default Weather;