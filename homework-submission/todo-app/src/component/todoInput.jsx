import React from "react";

const Input = ({ handleInput, type }) => (
  <input
    required="required"
    type={type}
    name={type}
    id={type}
    onChange={handleInput}
  />
);

export default Input;
