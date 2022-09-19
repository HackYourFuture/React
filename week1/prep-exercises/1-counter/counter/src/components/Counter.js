import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  const incrementCount = () => {
    if (count <= 10) {
      setCount((prevCount) => prevCount + 1);
    } else {
      return;
    }
  };
  const incrementCountTwo = () => {
    if (count <= 9) {
      setCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount + 1);
    } else {
      return;
    }
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  };
  const decrementCountTwo = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <Count value={count} />
      <h2>{feedback}</h2>
      {/* <Button function={incrementCount} /> */}
      <button onClick={incrementCount}>Add 1 </button>
      <button onClick={incrementCountTwo}>Add 2 </button>
      <button onClick={decrementCount}>Remove 1 </button>
      <button onClick={decrementCountTwo}>Remove 2 </button>
    </div>
  );
};

export default Counter;
