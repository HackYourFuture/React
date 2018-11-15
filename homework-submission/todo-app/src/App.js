import React, { Component } from 'react';
import './App.css';
import Todos from './todos/todos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
