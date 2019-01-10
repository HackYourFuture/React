import React from 'react';

const TodoItem = props => 
  <div className="todo-item">
    <p1>{props.description}</p1>
    <p2>{props.deadlineDate}</p2>
  </div>

export default TodoItem
