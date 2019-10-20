import React from 'react';
import './Button.css';
const Button = props => {
  const { value, clicked, className } = props;
  return (
    <button className={className} onClick={clicked}>
      {value}
    </button>
  );
};

export default Button;
