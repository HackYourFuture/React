import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Description id="todo-items"/>
      </div>
    );
  }
}

export default App;
