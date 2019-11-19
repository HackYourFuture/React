import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>Inc. 1!</button>
    </div>
  );
};

export default Button;
