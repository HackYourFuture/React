import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Login />

        </header>

      </div>
    );
  }
}

export default App;
