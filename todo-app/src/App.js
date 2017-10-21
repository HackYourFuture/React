import React, { Component } from 'react';
import TodosList from './todosList'
import Todo from './todo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <h1>Todo List App</h1>
        {TodosList.map((todo, index) => {
          return (
          <Todo
          todoDescription={todo.todoDescription}
          todoState={todo.todoState}
          />
          )
        })}
      </div>
    )
  }
}
export default App