import React from 'react';

const Input = ({ handleChange, name, type, value }) => {
  return <input onChange={handleChange} value={value} type={type} name={name} />;
};

export default Input;
