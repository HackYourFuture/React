import React, { Component } from 'react';
import './root.css';
import logo from './logo.svg';

class Root extends Component {
  render() {
    return (
      // <BrowserRouter>
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Homework Week 4</h1>
          <h2>Links to Previous Homeworks</h2>
        </header>
      </React.Fragment>
    );
  }
}

export default Root;
