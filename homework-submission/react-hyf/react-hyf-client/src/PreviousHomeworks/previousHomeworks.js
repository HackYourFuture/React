import React from 'react';
import './App.css';
import Week1 from './week1.js';
import Week2 from './week2.js';

const PreviousHomeworks = () => {
  return (
    <div className="todoListMain">
      <Week1 />
      <Week2 />
    </div>
  );
};

export default PreviousHomeworks;
