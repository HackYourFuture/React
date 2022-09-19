import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.function.incrementCount}>Add 1!</button>
      <button onClick={props.function.incrementCountTwo}>Add 2!</button>
      <button onClick={props.function.decrementCount}>Remove 1!</button>
      <button onClick={props.function.decrementCountTwo}>Remove 2!</button>
    </div>
  );
};

export default Button;
