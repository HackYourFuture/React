import React from 'react';

function Input({ type = 'text', placeholder, value, name, handleChangeInput, onFocusInput }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      size={17}
      onChange={handleChangeInput}
      onFocus={onFocusInput}
    />
  );
}

export default Input;
