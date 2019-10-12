import React from 'react';

function HyfButton({ name, toggle }) {
  return <button onClick={toggle}>{name}</button>;
}

export default HyfButton;
