import React from 'react'

function Info(props) {
    return (
        <li className="weather_info" >
            <h3 className="main_weather">
                {props.item.weather[0].main}
            </h3>
            <p className="description">
                {props.item.weather[0].description}
            </p>
        </li>
    )
}

export default Info
