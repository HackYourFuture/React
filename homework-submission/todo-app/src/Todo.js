import React from 'react';
import './Todo.css';

const Todo = props => {
  const { id, description, deadline, done } = props.todo;
  return (
    <li className={`Todo ${done ? 'done' : ''}`}>
      {(id || '') + ' ' + description}
      <span>{deadline}</span>
    </li>
  );
};

export default Todo;

// This is a Todo Component. The lowest component in the hierarchy.
