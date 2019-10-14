import React from 'react';

function Input({ type = 'text', placeholder, value, name, handleChangeInput,onFocusInput }) {
  return (
      <input
        className="input" 
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChangeInput}
        onFocus={onFocusInput}
      />
  );
}

export default Input; 
