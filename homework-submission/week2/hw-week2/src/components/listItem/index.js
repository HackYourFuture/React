import React from 'react';

const li = ({ text, crossed, toggleDone }) => {
  return (
    <li className={crossed} onClick={toggleDone}>
      {text}
    </li>
  );
};

export default li;
