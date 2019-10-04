import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staticlist from './components/staticlist';
import Dynamiclist from './components/dynamiclist';
import ComponentHeader from './components/headercomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
        </div>
      <ComponentHeader title="Static List"/>
      <Staticlist description="Get out of bed" deadline="Wed Sep 13 2017"/>
      <Staticlist description="Brush teeth" deadline="Thu Sep 14 2017"/>
      <Staticlist description="Eat breakfast" deadline="Fri Sep 15 2017"/>
      <ComponentHeader title="Dynamic List"/>
      <Dynamiclist/>
      </div>
    );
  }
}

export default App;
