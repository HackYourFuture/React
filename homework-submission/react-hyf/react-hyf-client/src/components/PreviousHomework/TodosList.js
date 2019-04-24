import React from 'react';
import Table from './TodoTable';
import Button from './ButtonForm';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <Button type={"button"} className={"delete"} buttonName={"X"} onClick={() => { deleteTodo(todo.id) }} />
          <Table description={todo.description} deadline={todo.deadline}
          />
        </div>
      )
    })) : (<p>There is No todos ..... </p>)
  return (
    <div>
      {todoList}
    </div>
  )
}

export default Todos;