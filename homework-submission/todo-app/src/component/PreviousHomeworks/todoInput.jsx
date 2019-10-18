import React from "react";

const Input = ({ handleInput, type, name, value }) => (
  <input
    required="required"
    type={type}
    name={name}
    id={name}
    onChange={handleInput}
    value={value}
  />
);

export default Input;
