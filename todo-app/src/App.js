import React, { Component } from 'react';
import todosStatus from './todosStatus'
import TodoItem from './todoItems'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        {todosStatus.map((todo, index) => {
          return (
            <TodoItem key={index}
              todoDescription={todo.todoDescription}
              done={todo.done}
            />
          )
        })}
      </div>
    )
  }
}
export default App