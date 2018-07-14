import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Component
import List from './components/List';

class App extends Component {
  state = {
    todo_list: [{
      description: "Get out of bed",
      deadline: "Wed Sep 13 2017",
    },
    {
      description: "Brush teeth",
      deadline: "Thu Sep 14 2017",
    },
    {
      description: "Eat breakfast",
      deadline: "Fri Sep 15 2017",
    }]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Week 1</h1>
        </header>
        <List list={this.state.todo_list}></List>
      </div>
    );
  }
}

export default App;
