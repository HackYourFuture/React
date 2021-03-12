import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const feedback = count > 10 ? "It`s higher than 10!" : "Keep counting...";

  return (
    <div className="counter">
      <Count currCount={count} />
      <Button addOne={increaseCount} />
      <h3>{feedback}</h3>
    </div>
  );
};

const Count = props => <h2>{props.currCount}</h2>;

const Button = props => <button onClick={props.addOne}>Add 1!</button>;

export default Counter;
