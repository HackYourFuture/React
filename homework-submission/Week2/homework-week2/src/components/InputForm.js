import React from 'react';

const Input = ({ value, name, type, onChange, placeholder }) => {
  return <input value={value} placeholder={placeholder} type={type} name={name} onChange={onChange}/>
};


export default Input;