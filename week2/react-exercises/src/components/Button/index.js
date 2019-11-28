import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button
        className={props.text === "Get a friend!" ? "btn-friend" : "dog-btn"}
        onClick={props.fetchData}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
