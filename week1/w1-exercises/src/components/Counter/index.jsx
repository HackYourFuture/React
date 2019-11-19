import React, { useState } from "react";
import Count from "../Count";
import Button from "../Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Button setCount={setCount} count={count} />
    </div>
  );
};

export default Counter;
