import React from 'react';
import Homework1 from './homework1';
import Homework2 from './homework2';
import '../App.css';

const PreviousHomework = () => {
  return (
    <div className="previous">
      <h1 className="homework_header">Homework1</h1>
      <Homework1/>
      <h1 className="homework_header">Homework2</h1>
      <Homework2/>      
    </div>
  );
};

export default PreviousHomework;
