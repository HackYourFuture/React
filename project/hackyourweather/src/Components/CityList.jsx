import React from 'react';
import CityCard from './CityCard';

const cityList = ({weatherData, setWeatherData}) => {
    return (
        <div>
            {weatherData.map(cityData => {
                return <CityCard key={cityData.id} cityData={cityData} setWeatherData={setWeatherData} weatherData={weatherData}/>

            })}
        </div>
    )
}

export default cityList;