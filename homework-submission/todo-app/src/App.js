import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import TodoItems from './components/TodoItem';
import TodoList from './components/TodoList';

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