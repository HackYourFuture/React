import React from 'react'

function Temp(props) {
    return (
        <li>
            <p className="min_temp">min temp :  &nbsp; {props.city.main.temp_min}</p>
            <p className="max_temp"> max temp :  &nbsp; {props.city.main.temp_max}</p>
            <p className="location">location:  &nbsp; {props.city.coord.lon}, {props.city.coord.lat}</p>
        </li>
    )
}

export default Temp