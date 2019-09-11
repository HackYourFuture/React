import React from 'react';

const Button = ({ text, onClick, id }) => {
  return <input id={id} type="submit" value={text} onClick={onClick} />;
};

export default Button;
