import React from 'react';
import './todo.css';
const TodoStatic = () => {
  return (
    <ul className="todo_container">
      <li className="isDone list">
        <span>Get out of bed</span>
        <span>2019-09-11</span>
      </li>
      <li className="list">
        <span>Brush teeth</span>
        <span>2019-09-10</span>
      </li>
      <li className="list">
        <span>Eat breakfast</span>
        <span>2019-09-09</span>
      </li>
    </ul>
  );
};

export default TodoStatic;
