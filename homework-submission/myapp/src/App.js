import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import TodoItems from './TodoItems'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Header />
        <img
          src='https://www.mangoapps.com/blog/wp-content/uploads/to-do.jpg'
          className="img" alt="todo-img" width="400" height="260"
        />
        <TodoItems />
      </div>
    );
  }
}

export default App;
