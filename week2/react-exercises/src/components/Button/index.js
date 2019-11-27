import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button className="btn" onClick={props.fetchFriend}>
        Get a friend!
      </button>
    </div>
  );
};

export default Button;
