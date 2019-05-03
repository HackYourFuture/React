import React from 'react';
import './item.css';

const Item = props => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span onClick={props.clicked}>X</span>
    </div>
  );
};

export default Item;
