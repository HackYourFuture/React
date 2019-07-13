import React, { Component } from 'react';
import './App.css';
import Homework1 from './Components/Homework1/Homework1';
import Homework2 from './Components/Homework2/Homework2';
import Homework3 from './Components/Homework3/Homework3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="homework-header">Homework 1</h1>
        <Homework1 />
        <h1 className="homework-header">Homework 2</h1>
        <Homework2 />
        <h1 className="homework-header">Homework 3</h1>
        <Homework3 />
      </div>
    );
  }
}

export default App;
