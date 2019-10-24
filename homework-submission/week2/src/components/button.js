import React from 'react';

function Button({ type = 'submit', value, clickHandler }) {
  return (
      <button className="button" type={type} value={value} onClick={clickHandler}>
        {value}
      </button>
  );
}
export default Button;
