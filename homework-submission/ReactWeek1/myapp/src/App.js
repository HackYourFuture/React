import React, { Component } from 'react';
import './App.css';
import Header from './todoapp/Header';
import TodoList from './todoapp/TodoList';
import Photo from './todoapp/picture';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo App</h1>
        </header>
        <Header />
        <TodoList />
        <Photo />
      </div >
    );
  }
}

export default App;
