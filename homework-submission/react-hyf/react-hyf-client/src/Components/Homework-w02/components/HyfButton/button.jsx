import React from 'react';

function HyfButton({ name, toggle, className }) {
  return (
    <button className={className} onClick={toggle}>
      {name}
    </button>
  );
}

export default HyfButton;
