import React from 'react'

function Details ({ minTemp, maxTemp, lat, lon }) {
  return (
    <table>
      <thead>
        <tr>
          <th>min temp:</th>
          <td>{minTemp}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>max temp:</th>
          <td>{maxTemp}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>location: </th>
          <td>
            {lat}, {lon}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Details
