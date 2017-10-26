import React, { Component } from 'react';
import todosTable from './todosTable'
import Todo from './todo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        {todosTable.map((todo, index) => {
          return (
            <Todo key={index}
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