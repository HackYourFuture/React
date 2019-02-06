import React, { Component } from 'react'
import logo from '../logo.png';

export default class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Photo Wall
          </h1>
      </header>
    )
  }
}