import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import data from './sources/data.json'

class App extends Component {
  state = {
    data
  }

    handler = event => {
      let todos = this.state.data;
      todos[event.target.id -1].done = !todos[event.target.id -1].done;
      this.setState({
        todos
      })
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do list</h1>
        </header>
        <Todos 
        items = {this.state.data} 
        handler = {this.handler}
         />
      </div>
    );
  }
}

export default App;
