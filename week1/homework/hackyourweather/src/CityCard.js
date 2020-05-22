import React from 'react'

export default function CityCard(props){
    const { name, countryCode, mainWeather, description, temp_min, temp_max, longitude, latitude } = props;
    return (
        <div className="cityBox">
            <div className="City">
                <h2>{name}, {countryCode}</h2>
                <div className="Weather">
                    <h3>{mainWeather}</h3>
                    <p className='description'>{description}</p>
                </div>
                <div className='temp'>
                    <p>min temp: {(temp_min -273.15).toFixed(1)} °C</p>
                    <p>max temp: {(temp_max -273.15).toFixed(1)} °C</p>
                    <p>
                        location: {longitude}, {latitude}
                    </p>
            </div>
        </div>

        </div>
        
    );

}


