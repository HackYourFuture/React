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
    const idx = e.target.id;
    const newTodos = this.state.todoObj.map(item => {
      if (item.id === parseInt(idx, 10)) {
        return {
          ...item, done: !item.done
        }
      }
      return item;
    });
    this.setState({ todoObj: newTodos });
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
