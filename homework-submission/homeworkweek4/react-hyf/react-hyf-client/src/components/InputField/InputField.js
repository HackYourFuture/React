import React from 'react';
import './InputField.css';

const InputField = ({ onChangeHandler, type, placeholder, name }) => (
  <input
    className="input-field"
    onChange={onChangeHandler}
    type={type}
    placeholder={placeholder}
    name={name}
  />
);

export default InputField;
