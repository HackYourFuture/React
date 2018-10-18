import React, { Component } from 'react';
import todoLogo from './todo.png';
import './App.css';
import Todo from "./todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={todoLogo} className="todo-logo" alt="todo" />
          <div class="text-box">
            <h2>Todo List</h2>

            <Todo class="todo-item" item="go to Noordwijkerhout" date='2018-10-17' />
            <Todo class="todo-item" item="buy some households from Ikea" date='2018-11-01' />
            <Todo class="todo-item" item="install laminate floor" date='2018-11-13' />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
