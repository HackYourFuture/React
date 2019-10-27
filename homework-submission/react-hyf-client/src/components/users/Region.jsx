import React from 'react';
import './Region.css';
import { countries } from '../services/countries';
const Region = props => {
  const { queryRegionHandler } = props;

  return (
    <div className="custom-select">
      <select onChange={queryRegionHandler}>
        <option selected>Select Country</option>
        {countries.map(option => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Region;
