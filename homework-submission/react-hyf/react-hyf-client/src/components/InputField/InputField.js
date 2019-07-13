import React from 'react';
import './InputField.css';

const InputField = ({ onchangeHandler, type, placeholder, name }) => (
  <input
    className="input-field"
    onChange={onchangeHandler}
    type={type}
    placeholder={placeholder}
    name={name}
  />
);

export default InputField;
