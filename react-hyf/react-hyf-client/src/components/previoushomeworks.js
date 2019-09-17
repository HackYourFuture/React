import React from 'react';
import Homework1 from './homework1';
import Homework2 from './homework2';

const PreviousHomeworks = () => {
  return (
    <div className="heading">
      <h1 className="homework-headings">Homework1</h1>
      <Homework1 />
      <h1 className="homework-headings">Homework2</h1>
      <Homework2 />      
    </div>
  );
};

export default PreviousHomeworks;
  
