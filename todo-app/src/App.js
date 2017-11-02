import React, { Component } from 'react';
import TodosList from './todosList'
import Todo from './todo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        {TodosList.length!==0 ? TodosList.map((todo, index) => {
          return (
            <Todo key={index}
            description={todo.description}
            done={todo.done}
            />
          )
         }) : ("No list")}
        </div>
      )
    }
    }

export default App