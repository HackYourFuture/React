import React from 'react';
import Data from './city-weather.json';

function Cities() {
  return (
    <div>
      {Data.map(postDetail => {
        return (
          <div className="box">
            <h1>
              {postDetail.name}, {postDetail.sys.country}
            </h1>
            <h2 className="weather">{postDetail.weather.map(weat => weat.main)}</h2>
            <p className="description">
              {postDetail.weather.map(
                weat => weat.description[0].toUpperCase() + weat.description.slice(1),
              )}
            </p>
            <p>min temp: {postDetail.main.temp_min}</p>
            <p>max temp: {postDetail.main.temp_max}</p>
            <p>
              location: {postDetail.coord.lon} / {postDetail.coord.lat}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cities;
