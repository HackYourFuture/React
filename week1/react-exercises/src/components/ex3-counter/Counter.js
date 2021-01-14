import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(() => 0);
  const addOne = () => setCount((prevCount) => prevCount + 1);

  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div className="counter">
      <Button setCount={addOne} />
      <Count count={count}></Count>
      <span>{feedback}</span>
    </div>
  );
};

export default Counter;
