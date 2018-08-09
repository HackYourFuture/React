import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src="https://russellinvestments.com/-/media/images/au/tiles/todolist.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo List app</h1>
        </header>
        <p className="App-intro">This app is displaying three Todo items</p>
        <TodoList />
      </div>;
  }
}

export default App;
