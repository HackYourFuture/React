import React from "react";

const Button = ({ clickHandler, btnText }) => {
  return <button onClick={clickHandler}>{btnText}</button>;
};

export default Button;
