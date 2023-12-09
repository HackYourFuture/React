
import React, { useState } from 'react';
import Button from './button';
import Count from './count';

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const handleAddOne = () => {
    setCount (oldCount => oldCount + 1);
  };

  return (
    <div className='counterBox'>
      <h1>Number Counter</h1>
      <Count count={count} />
      <Button onClick={handleAddOne} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
