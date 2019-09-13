import React from 'react';
import '../styles/gender-filter-button.css';

const GenderFilterButton = ({ path, onPress, activeStatus }) => {
  return (
    <div className="filter-button">
      <img
        className={`filter-button-image ${activeStatus}`}
        src={path}
        alt="icon"
        onClick={onPress}
      />
    </div>
  );
};

export default GenderFilterButton;
