import React, { Component } from 'react';
import './App.css';
import PreviousHomework from './components/previoushomework';
import Homework3 from './components/homework3';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
        </div>
        <PreviousHomework/>
        <h1 className="homework_header">Homework3</h1>
        <Homework3/>
      </div>
    );
  }
}

export default App;
