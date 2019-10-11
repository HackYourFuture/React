import React, { Component } from 'react';
import './App.css';
import StaticList from './Components/StaticList';
import DynamicList from './Components/DynamicList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}

export default App;
