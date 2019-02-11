import React from "react";

import Button from "./Button";

const CounterPanel = ({
  count,
  counterName,
  handleIncreaseCount,
  handleDecreaseCount
}) => {
  return (
    <div>
      <h1>
        {counterName}
        <span className="header-count">| {count}</span>
      </h1>
      <Button clickHandler={handleIncreaseCount} btnText="Increase" />
      <Button clickHandler={handleDecreaseCount} btnText="Decrease" />
    </div>
  );
};

export default CounterPanel;
