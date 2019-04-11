import React from 'react';

const Button = ({ buttonName, className, disabled , type, onClick}) => {
  return <button className={className} type={type} disabled={disabled} onClick={onClick}>{buttonName}</button>
};


export default Button;