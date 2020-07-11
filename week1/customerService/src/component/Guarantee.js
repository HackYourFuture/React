import React from 'react';

function Guarantee({ img, title, description }) {
  return (
    <div>
      <img src={img} alt={"advertisement"} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;