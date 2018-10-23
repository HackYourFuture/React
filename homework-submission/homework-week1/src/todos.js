import React from 'react';

const Todos = ({ todos, deleteTodo, handleClick }) => {
  const todoList = todos.length !== 0 ? (
    todos.map(todo => {
      return (
        <div className="item-todo" key={todo.id}>
          <input type='checkbox' defaultChecked={todo.done} onChange={() => handleClick(todo.id)} />
          <span className={todo.done ? 'checked' : 'notChecked'}>{todo.description}, {todo.deadline}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div >
      )
    })
  ) : (
      <p className='noTask'>No items...</p>
    )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos