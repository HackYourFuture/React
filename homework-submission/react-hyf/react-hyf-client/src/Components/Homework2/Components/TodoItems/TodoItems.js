import React from 'react';
import './TodoItems.css';

/**
 * A function component that inserts a dynamic item in a list of todo's
 * @param {props} param0 `todoItems` The array of todoItems, `deleteTodoItem` function to delete a todo item
 * @return
 *  - Todo item with the values of the todoItems of the array
 *  - The dynamic list of todoItems
 */
const TodoItems = ({ todoItems, deleteTodoItem }) => {
  const items = todoItems.length ? (
    todoItems.map(({ id, description, deadline, done }) => {
      return (
        <li key={id}>
          <span className={`description ${done ? 'todo-item-done' : ''}`}>{description}</span>
          <span className={`deadline ${done ? 'todo-item-done' : ''}`}>{deadline}</span>
          <span className="action icon" onClick={() => deleteTodoItem(id)}>
            &times;
          </span>
        </li>
      );
    })
  ) : (
    <p>There is no todo items</p>
  );
  return (
    <ul className="list-items">
      <li>
        <span className="description title">Todo Item Name</span>
        <span className="deadline title">Deadline</span>
        <span className="action title">Action</span>
      </li>
      {items}
    </ul>
  );
};

export default TodoItems;
