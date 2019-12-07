import React from 'react'

function Temp({ city }) {
    return (
        <li>
            <p className="min_temp">min temp :  &nbsp; {city.main.temp_min}</p>
            <p className="max_temp"> max temp :  &nbsp; {city.main.temp_max}</p>
            <p className="location">location:  &nbsp; {city.coord.lon}, {city.coord.lat}</p>
        </li>
    )
}

export default Temp