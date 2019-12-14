import React from 'react'

function Info({ item }) {
    return (
        <li className="weather_info">
            <h3 className="main_weather">
                {item.main}
            </h3>
            <p className="description">
                {item.description}
            </p>
        </li>
    )
}

export default Info
