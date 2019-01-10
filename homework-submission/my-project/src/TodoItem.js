import React from 'react';

const TodoItem = props =>
  <div className="todo-item">
    <p>{props.description}</p>
    <p>{props.deadlineDate}</p>
  </div>

export default TodoItem
