import React from 'react';
const ToDoInput = ({ type, name, placeholder, label, handleChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={handleChange} />
    </React.Fragment>
  );
};

export default ToDoInput;
