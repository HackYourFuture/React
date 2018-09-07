import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import AddForm from './AddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <AddForm />
      </div>
    );
  }
}

export default App;