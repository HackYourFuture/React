import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './todoapp/Header';
import Photo from './todoapp/picture';
import Todoitem from './todoapp/TodoItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo App</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Header />
        <Photo />
        <Todoitem />
      </div>
    );
  }
}

export default App;
