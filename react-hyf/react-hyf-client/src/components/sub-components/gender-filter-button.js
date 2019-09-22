import React from 'react';
import '../styles/gender-filter-button.css';

const GenderFilterButton = ({ path, onPress, activeStatus }) => {
  return (
    <div className="filter-button" onClick={onPress}>
      <img className={`filter-button-image ${activeStatus}`} src={path} alt="icon" />
    </div>
  );
};

export default GenderFilterButton;
