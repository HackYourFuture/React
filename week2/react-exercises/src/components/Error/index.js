import React from "react";
import "./Error.css";

const Error = ({ text }) => {
  return (
    <div className="error-div">
      <p className="error-text">{text}</p>
    </div>
  );
};

export default Error;
