import React from 'react'

function CityName(props){
    return(
        <li className="cityName">
             <h3>{props.city.name}, {props.city.sys.country}</h3>
        </li>
    )
}

export  default CityName