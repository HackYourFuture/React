import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Component
import List from './components/List';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Week 3</h1>
        </header>
        <div className="row">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
