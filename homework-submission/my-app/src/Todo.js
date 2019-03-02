import React from 'react';

const Todo = ({ text, isCompleted, index, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div className="text" style={{ textDecoration: isCompleted && 'line-through' }}>
        {text}
      </div>
      <div className="actions">
        <button
          className="buttons"
          onClick={event => {
            event.preventDefault();
            completeTodo(index);
          }}
        >
          done/undone
        </button>
        <button
          className="buttons"
          onClick={event => {
            event.preventDefault();
            removeTodo(index);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
