import React from 'react';

const Button = ({ getFriend }) => {
  return (
    <div>
      <button onClick={() => getFriend()}>Get a friend!</button>
    </div>
  );
};
export default Button;
