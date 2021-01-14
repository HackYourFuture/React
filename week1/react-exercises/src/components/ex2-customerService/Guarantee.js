import React from 'react';

const Guarantee = ({ src, title, description }) => {
  return (
    <div className="service">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
