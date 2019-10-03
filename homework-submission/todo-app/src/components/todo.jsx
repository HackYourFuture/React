import React from 'react';
import './todo.css';
const Todo = props => {
  const { description, id, handleDone, done, deadline, onDelete } = props;
  return (
    <li className={done ? 'isDone' : ''}>
      <span onClick={() => handleDone(id)}>
        <i className={`check fas fa-check-circle ${done ? 'checked' : ''}`}></i>
        {description}
      </span>
      <span>
        {deadline} <i onClick={() => onDelete(id)} className="delete fas fa-trash"></i>
      </span>
    </li>
  );
};

export default Todo;
