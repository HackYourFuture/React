
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TopHeader from './components/TopHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TopHeader />
        <TodoList />
      </div>
    );
  }
}


export default App;