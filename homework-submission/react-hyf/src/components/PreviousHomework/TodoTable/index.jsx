import React from 'react';

function TodoTable({ todos, deleteTodo, markTodo }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Deadline</th>
          <th>Remove</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <td>{todo.description}</td>
              <td>{todo.deadline}</td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
              </td>
              <td>
                <button onClick={() => markTodo(todo.id, todo.done)}>
                  {!todo.done ? 'Mark As Done' : 'Mark as Not Done'}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
