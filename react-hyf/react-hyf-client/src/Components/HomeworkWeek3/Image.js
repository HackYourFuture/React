import React from 'react';

const Image = props => {
  return (
    <div className="photo">
      <img src={props.photo} alt={props.name}></img>
    </div>
  );
};

export default Image;
