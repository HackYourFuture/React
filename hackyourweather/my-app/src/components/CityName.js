import React from 'react';



function CityName({name, country }){
    return (
        <div>
        <h1>{name}, {country.country}</h1>
        </div>
    )
}


export default CityName;