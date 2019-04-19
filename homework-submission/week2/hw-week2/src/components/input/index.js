import React from 'react';

const Input = ({ name, type, buttonTitle, placeholder, handleChange }) => {
  return (
    <React.Fragment>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={buttonTitle}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default Input;
