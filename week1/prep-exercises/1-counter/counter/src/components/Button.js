import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.functions.incrementCount}>Add 1!</button>
      <button onClick={props.functions.incrementCountTwo}>Add 2!</button>
      <button onClick={props.functions.decrementCount}>Remove 1!</button>
      <button onClick={props.functions.decrementCountTwo}>Remove 2!</button>
    </div>
  );
};

export default Button;
