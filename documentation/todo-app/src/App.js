import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList';
import TopHeader from './components/topHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader />
        <TodoList />
      </div>
    );
  }
}

export default App;
