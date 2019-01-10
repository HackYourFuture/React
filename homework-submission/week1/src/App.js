import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div className='App-header'>
        <ToDoList></ToDoList>
      </div >
    );
  }
}

export default App;
