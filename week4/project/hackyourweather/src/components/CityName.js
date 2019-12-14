import React from 'react'
import {Link} from 'react-router-dom'

function CityName({ city,removeItem,id }) {
    return (
        <li className="cityName"  >
            <Link to={`/${id}`}>
                <h3>{city.name}, {city.sys.country}</h3>
            </Link>
            <button className="remove" onClick={()=> removeItem(city.id)}>X</button>
        </li>
    )
}

export default CityName