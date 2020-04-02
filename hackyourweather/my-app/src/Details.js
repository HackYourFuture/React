
import React from 'react';



function Details({minTemp, maxTemp, lat, lon}){
    return (
        <table>
        <tr>
            <th>min temp:</th>
            <td>{minTemp}</td>
        </tr>
        <tr>
            <th>max temp:</th>
            <td>{maxTemp}</td>
        </tr>
        <tr>
            <th>location: </th>
            <td>{lat}, {lon}</td>
        </tr>
        </table>
    )
}


export default Details;