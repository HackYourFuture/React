import React, { Component } from 'react';
import todosTable from './todosTable';
import Todo from './todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class = 'App'>
        <h1>Todo list app</h1>
        {todosTable.length !==0 ? todosTable.map((todo, index) => {
          return (
            <Todo key={index}
            description={todo.description}
            done={todo.done}
            />
          )
        }) : ("No items...")}
      </div>
    );
  }
}

export default App;
