import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  function incrementCount() {
    if (count <= 10) {
      setCount((prevCount) => prevCount + 1);
    } else {
      return;
    }
  }
  function incrementCountTwo() {
    if (count <= 9) {
      setCount((prevCount) => prevCount + 2);
    } else {
      return;
    }
  }
  function decrementCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  }
  function decrementCountTwo() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 2);
    } else {
      return;
    }
  }

  const buttonsFunction = {
    incrementCount,
    incrementCountTwo,
    decrementCount,
    decrementCountTwo,
  };

  return (
    <div>
      <Count value={count} />
      <h2>{feedback}</h2>
      <Button function={buttonsFunction} />
    </div>
  );
};

export default Counter;
