import React, { Component } from 'react';
import Todolist from './Todolist';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1><em>This is my Todo list</em></h1>
        </header>
        <Todolist />

      </div>
    );
  }
}

export default App;
