import React, { useState } from 'react';

function Counter() {
  const [count, setcount] = useState(0);
  const feedback = isCount => {
    if (isCount > 10) {
      return "It's higher than 10!";
    } else {
      return 'Keep counting...';
    }
  };
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Add 1</button>
      <p>{count} </p>
      <p>{feedback(count)}</p>
    </div>
  );
}

export default Counter;
