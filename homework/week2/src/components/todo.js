import React from 'react';

function Todo({ id, description, deadline, handleRemoveItem }) {
  return (
    <h3 className="todo" onClick={() => handleRemoveItem(id)}>
      {description}/{deadline}
    </h3>
  );
}

export default Todo;