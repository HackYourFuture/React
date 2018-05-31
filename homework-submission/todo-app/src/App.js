import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoItems from './components/TodoItem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoItems />
      </div >
    );
  }
}

export default App;