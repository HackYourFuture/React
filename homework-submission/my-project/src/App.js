import React, { Component } from 'react';
import './App.css';
import TodosList from './todo';
import Header from './page-header.js';
import AddForm from './AddForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodosList />
        <AddForm />
      </div>
    );
  }
}

export default App;