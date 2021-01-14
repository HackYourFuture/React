import React from 'react';

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button onClick={() => getDogPhoto()}>Get a dog!</button>
    </div>
  );
};
export default Button;
