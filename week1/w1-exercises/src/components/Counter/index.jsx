import React, { useState } from "react";
import Count from "../Count";
import Button from "../Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = "It's higher than 10!";
  return (
    <div className="count-board">
      {count > 10 ? (
        <p className="warning">{feedback}</p>
      ) : (
        <p>Keep counting</p>
      )}
      <Count count={count} />
      <Button setCount={setCount} count={count} />
    </div>
  );
};

export default Counter;
