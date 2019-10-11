import React from 'react';

function TodoList({ todos, deleteTodo, markTodo }) {
  return (
    <table>
      <tr>
        <th>Todo</th>
        <th>Deadline</th>
        <th>Remove</th>
        <th>Complete</th>
      </tr>

      {todos.map(todo => {
        return (
          <tr
            style={
              todo.done === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
            }
          >
            <td>{todo.description}</td>
            <td>{todo.deadline}</td>
            {'      '}
            <td>
              <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
            </td>
            <td>
              <button onClick={() => markTodo(todo.id, todo.done)}>Mark todo</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default TodoList;
