import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Devtools from 'mobx-react-devtools'
import FilterTodos from './todos/FilterTodos'
import TodoList from './todos/TodoList'
import CreateTodo from './todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is My Homework, Using <code>MOBX</code> Todo List.
        </p>
          < Devtools / >
        <h2 style={styles} > Todos </h2>
        <FilterTodos />
            <CreateTodo / >
            <TodoList / >
      </div>
    );
  }
}

export default App;
