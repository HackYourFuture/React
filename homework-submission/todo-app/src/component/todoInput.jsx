import React from "react";

const Input = ({ handleInput, type, name }) => (
  <input
    required="required"
    type={type}
    name={name}
    id={name}
    onChange={handleInput}
  />
);

export default Input;
