import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoItem />
      </div>
    );
  }
}

export default App;
