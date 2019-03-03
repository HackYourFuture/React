import React from 'react';

const Todos = ({ todos, deleteTodo, addTodo }) => {
  const todoList = todos.length !== 0 ? (
    todos.map(todo => {
      return (
        <div>
          <span>{todo.description},{todo.deadline}</span>
          <button onClick={() => deleteTodo(todo.id)}></button>
          {/* <div>
            <span>
              <button onClick={() => addTodo(todo.id)}></button>
            </span>
          </div> */}
        </div>
      )
    })

  ) : (
      <p>No More Todos ....</p>
    )
  return (
    <div>
      {todoList}
    </div>
  )
}


export default Todos