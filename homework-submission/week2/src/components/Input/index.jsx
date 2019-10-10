import React from 'react';

function Input({ type = 'text', placeholder, value, name, handleChangeInput }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        size={25}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default Input;
