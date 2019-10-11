import React from 'react';

function Button({ type = 'submit', value }) {
  return (
    <div>
      <button className="button" type={type} value={value}>
        {value}
      </button>
    </div>
  );
}
export default Button;
