import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodosList />
      </div >
    );
  }
}

export default App;