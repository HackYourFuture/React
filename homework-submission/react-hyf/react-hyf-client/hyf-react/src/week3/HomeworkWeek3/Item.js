
import React from 'react';

const Item = (props) => {
  const { icon, text } = props;
  return (
    <div>
      {icon}<span>  {text}</span>
    </div>)
}

export default Item;