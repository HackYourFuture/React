import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstTodoItem from './FirstTodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MURAT Todo LIST</h1>
        </header>
        <p className="App-intro">
          Todo List
        </p>
        <FirstTodoItem />
      </div>
    );
  }
}

export default App;
