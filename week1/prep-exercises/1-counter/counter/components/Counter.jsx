import React, { useState } from 'react';
import Count from './Count.jsx';
import Button from './Button.jsx';
import css from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div className={css.container}>
      <h1>{feedback}</h1>
      <Count value={count} />
      <Button addNumber={increment} />
    </div>
  );
};

export default Counter;
