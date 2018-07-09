import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoItems from './ToDoItems';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoItems />
      </div>
    );
  }
}

export default App;
