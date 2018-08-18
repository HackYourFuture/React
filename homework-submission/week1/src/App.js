import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import todoObj from './todo.json';

class App extends Component {
  state = {
    todoObj
  };

  checkBoxHandler = (e) => {
    let id = e.target.id;
    let todos = Object.assign({}, this.state.todoObj);
    todos[id - 1].done = !todos[id - 1].done;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <TodoList listObj={this.state.todoObj} handler={this.checkBoxHandler} />
        </div>
      </div>
    );
  }
}

export default App;
