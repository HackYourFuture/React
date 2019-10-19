import React from 'react';
import './Region.css';
const Region = props => {
  const { countries, queryRegionHandler } = props;
  return (
    <ul className="region">
      {countries.map(country => (
        <li onClick={() => queryRegionHandler(country)} key={country}>
          {country}
        </li>
      ))}
    </ul>
  );
};

export default Region;
