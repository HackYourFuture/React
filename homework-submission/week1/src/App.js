import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do list</h1>
        </header>
        <p className='App-intro'></p>
        <Todos />
      </div>
    );
  }
}

export default App;
