import React from "react";

const Button = ({ buttonType, handleClick }) => {
  return (
    <button onClick={handleClick} className={buttonType}>
      {buttonType}{" "}
    </button>
  );
};

export default Button;
