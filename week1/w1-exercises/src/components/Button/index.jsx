import React from "react";
import "./Button.css";

const Button = ({ setCount, count }) => {
  return (
    <div className="btn-div">
      <button className="btn" onClick={() => setCount(count - 1)}>
        Dec. 1!
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Inc. 1!
      </button>
    </div>
  );
};

export default Button;
