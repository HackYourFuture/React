import React from 'react';

const Input = ({ handleChange, name, type, value, todoLength }) => {
  return (
    <input
      onChange={handleChange}
      value={value}
      type={type}
      name={name}
      disabled={todoLength >= 8}
    />
  );
};

export default Input;
