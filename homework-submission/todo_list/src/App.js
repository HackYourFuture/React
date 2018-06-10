import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Describtion from './Describtion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MURAT Todo LIST</h1>
        </header>
        <p className="App-intro">
          <h1>Todo List</h1>
        </p>
        <ul style={{ color: 'blue' }}>
          <li><Describtion todo={"Get out of bed ,Wed Sep 13 2017"} />

          </li>

          <li><Describtion todo={"Brush teeth,Thu Sep 14 2017"} /></li>
          <li><Describtion todo={"Eat breakfast,Fri Sep 15 2017"} /></li>
        </ul>

      </div >
    );
  }
}

export default App;
