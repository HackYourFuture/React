import React from 'react';
import Header from './Header';
import Todo from './Todo';
import './StaticComponent.css';

// This component renders static todo list
const StaticComponent = () => {
  return (
    <div className="class-div">
      <Header name="Static List" />
      <ul>
        <Todo description="Get out of bed" deadline="Wed Sep 13 2017" />
        <Todo description="Brush teeth" deadline="Thu Sep 14 2017" />
        <Todo description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};
export default StaticComponent;
