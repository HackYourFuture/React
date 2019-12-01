import React from 'react';

function CityProfile(props) {
  return (
    <div className="city-main">
      <ul className="city-list">
        <li>
          <h3>
            {props.name}, {props.country}
          </h3>
        </li>
        <li>
          <span>Condition :</span> {props.condition} / {props.description}
        </li>
        <li>
          <span>Min-Max ( K ) :</span> <span class="min-temp">{props.min_temp}</span> /{' '}
          <span class="max-temp">{props.max_temp}</span>
        </li>
        <li>
          <span>Location :</span> {props.longitude}° to {props.latitude}°
        </li>
      </ul>
    </div>
  );
}

export default CityProfile;
