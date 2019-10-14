import React from 'react';

function Button({ type = 'submit', value }) {
  return (
      <button className="button" type={type} value={value}>
        {value}
      </button>
  );
}
export default Button;
