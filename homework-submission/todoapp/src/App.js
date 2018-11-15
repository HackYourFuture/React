import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/todos'
import AddForm from './Components/AddForm';

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
