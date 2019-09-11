import React from 'react';

const Image = (props) => {
  return <img src={props.photo} alt={`face of ${props.name}`}/>
}


export default Image;