import React from 'react';
import './Todo.css';

const Todo = ({ itemName, items }) => {
  return (
    <div className="container">
      <h1 className="header">{itemName}</h1>
      <div className="text-area">{items}</div>
    </div>
  );
};
export default Todo;
