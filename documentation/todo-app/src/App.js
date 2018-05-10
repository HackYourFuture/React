import React, { Component } from 'react';
import Header from './components/Headers';
import Logo from './components/Logo';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <TodoList/>
      </div>
    );
  }
}

export default App;
