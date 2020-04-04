import React from 'react';

const WeatherCard = ({city, countryCode, weatherMain, weatherDescription, tempMin, tempMax, lon, lat}) => {
    return (
        <div className='cont'>
            <h1 className='city'>{city}, {countryCode}</h1>
            <div className='weatherDesc'>
                <h3 className='weatherMain'>{weatherMain}</h3>
                <p className='weatherDescription'> {weatherDescription} </p>
            </div>
            <div className='temperatureInfo'>
                <p className='tempMin'> Min Temp: {tempMin} </p>
                <p className='tempMax'> Min Temp: {tempMax} </p>
                <p className='location'> Location: {lon}, {lat} </p>
            </div>
        </div>
    )
}

export default WeatherCard;