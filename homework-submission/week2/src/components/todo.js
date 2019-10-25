import React from 'react';

function Todo({ id, description, deadline, handleDeleteTodo }) {
  return (
    <h3 id={id} className="todo" onClick={() => handleDeleteTodo(id)}>
      {description}/{deadline}
    </h3>
  );
}

export default Todo;
