import React from 'react';
import data from '/Users/hackyourfuture/Documents/HYF_React/React/react-project/my-app/src/components/city-weather.json';

const City = () => {
    const cityData = data.map((city) => 
        <div className='weather-card'>
            <h1 className='city-name'>{city.name}, {city.sys.country}</h1>
            <h2>{city.weather[0].main}</h2>
            <p>{city.weather[0].description}</p>
            <div className='number-data'>
                <p>max temp: {city.main.temp_max}</p>
                <p>min temp: {city.main.temp_min}</p>
                <p>location: {city.coord.lat}, {city.coord.lon}</p>
            </div>
        </div>

    ) 

    return <p>{cityData}</p>;
};

export default City;