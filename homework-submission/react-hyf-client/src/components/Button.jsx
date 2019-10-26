import React from 'react';
import './Button.css';
const Button = props => {
  const { value, clicked, className, data } = props;
  return (
    <button className={className} onClick={clicked} data={data}>
      {value}
    </button>
  );
};

export default Button;
