import React from 'react';

function Guarantee(props) {
  return (
    <div className="guarantee-parts">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Guarantee;
