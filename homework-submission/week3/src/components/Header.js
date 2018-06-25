import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TODO app</h1>
      </header>
    );
  }
}

export default Header;