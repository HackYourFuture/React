import React from 'react'

function CityName({ city }) {
    return (
        <li className="cityName"  >
            <h3>{city.name}, {city.sys.country}</h3>
        </li>
    )
}

export default CityName