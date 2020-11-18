import React from 'react';

const City = ({ weatherData }) => {

    const { name, sys, weather, main, coord } = weatherData;
    
    return (
        <div>
            <h1 className='city-name'>{weatherData.name}, {weatherData.sys.country}</h1>
            <h2>{weatherData.weather[0].main}</h2>
            <p>{weatherData.weather[0].description}</p>
            <div className='number-data'>
                <p className='max-temp'>max temp: {Math.round(weatherData.main.temp_max)}</p>
                <p className='min-temp'>min temp: {Math.round(weatherData.main.temp_min)}</p>
                <p>location: {weatherData.coord.lat}, {weatherData.coord.lon}</p>
            </div>
        </div>
    )
};

export default City;