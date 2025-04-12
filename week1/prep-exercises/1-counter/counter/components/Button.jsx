import React from 'react';
import css from './Button.module.css';

const Button = ({ addNumber }) => {
  return (
    <div>
      <button className={css.btn} onClick={addNumber}>
        Add 1
      </button>
    </div>
  );
};

export default Button;
