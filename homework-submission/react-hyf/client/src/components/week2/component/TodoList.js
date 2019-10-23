import React from 'react';
import TodoListItems from './TodoListItems';

function TodoList({ todos, handleComplete, handleDelete, handleClearList }) {
  return (
    <div>
      <ul className="list-group">
        {todos.length ? (
          todos.map(todo => (
            <TodoListItems
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div>
            <h5 className="text-secondary text-center text-bold text-uppercase">
              nothing to show in the Todo List
            </h5>
          </div>
        )}
      </ul>
      <button onClick={handleClearList} className="btn btn-outline-danger btn-block mt-2">
        Clear List
      </button>
    </div>
  );
}

export default TodoList;
