import React, { Component } from 'react';
import '../App.css';
import TasksList from './TasksList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>React To-do App </h1>
        </div>
        <div>
          <h2>This is your Tasks to do</h2>
          <TasksList />
        </div>
      </div>
    );
  }
}

export default App;
