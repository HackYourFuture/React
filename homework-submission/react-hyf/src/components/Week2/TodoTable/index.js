import React from 'react';

function TodoTable({ todos, deleteTodo, markTodo }) {
  return (
    <table className="table table-hover bg-light">
      <thead className="">
        <tr>
          <th scope="col">Todo</th>
          <th scope="col">Deadline</th>
          <th scope="col">Remove</th>
          <th scope="col">Complete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <td>{todo.description}</td>
              <td>{todo.deadline}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                  Delete todo
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => markTodo(todo.id, todo.done)}
                >
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
