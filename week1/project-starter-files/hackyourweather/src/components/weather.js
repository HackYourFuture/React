import React from 'react';
import weatherInfo from '../city-weather.json';

function Weather() {
    return (
        <div className="city_list">
            {weatherInfo.map(city => {
                return (
                    <div className="city_info" key={city.id}>
                        <ul className="info_list" >
                            <li className="cityName">
                                <h3>{city.name}, {city.sys.country}</h3>
                            </li>
                            {city.weather.map(item => {
                                return (
                                    <li className="weather_info" key={item.id}>
                                        <h3 className="main_weather">
                                            {item.main}
                                        </h3>
                                        <p className="description">
                                            {item.description}
                                        </p>
                                    </li>
                                )
                            })}
                            <li className="min_temp">
                                    min temp :  &nbsp; {city.main.temp_min}
                            </li>
                            <li className="max_temp">
                                    max temp :  &nbsp; {city.main.temp_max}
                            </li>
                            <li className="location">
                                location:  &nbsp; {city.coord.lon}, {city.coord.lat}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Weather;