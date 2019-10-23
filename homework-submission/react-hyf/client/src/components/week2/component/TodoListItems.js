import React from 'react';

function TodoListItems({ todo, handleComplete, handleDelete }) {
  return (
    <li
      key={todo.id}
      className={
        todo.done
          ? 'list-group-item d-flex justify-content-between bg-light done'
          : 'list-group-item d-flex justify-content-between bg-light none'
      }
    >
      <div className="d-flex">
        <h6 className="mr-3 font-bold font-italic">{todo.description}</h6>
        <p>{todo.deadline}</p>
      </div>
      <div>
        <input
          className="mx-2"
          type="checkbox"
          onChange={id => {
            handleComplete(todo.id);
          }}
        />
        <span
          onClick={id => {
            handleDelete(todo.id);
          }}
        >
          <i className="fa fa-trash mx-2 text-danger"></i>
        </span>
      </div>
    </li>
  );
}

export default TodoListItems;
