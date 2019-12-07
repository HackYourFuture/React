import React from 'react'

function CityName({ city,removeItem }) {
    return (
        <li className="cityName"  >
            <h3>{city.name}, {city.sys.country}</h3>
            <button className="remove" onClick={()=> removeItem(city.id)}>X</button>
        </li>
    )
}

export default CityName