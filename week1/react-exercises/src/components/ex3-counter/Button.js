import React from 'react';

const Button = ({ setCount }) => {
  return (
    <div>
      <button onClick={setCount}>Add One!</button>
    </div>
  );
};
export default Button;
