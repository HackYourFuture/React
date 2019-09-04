import React from 'react';
import PreviousHomework1 from './PreviousHomework1';
import PreviousHomework2 from './PreviousHomework2';

const PreviousHomeworks = () => {
  return (
    <div className="heading">
      <h1>Homework1</h1>
      <PreviousHomework1 />
      <h1>Homework2</h1>
      <PreviousHomework2 />
      <h1>Homework3</h1>
    </div>
  );
};

export default PreviousHomeworks;
