import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import data from './sources/data.json'

class App extends Component {
  state = {
    data
  }
    toggleTodo = e => {
      let data = [...this.state.data]
      data[e.target.id - 1].done = !data[e.target.id - 1].done;
      this.setState({
        data
      })
    }

    addTodo = e => {
      e.preventDefault();
      let data = [...this.state.data]
      const newTodo = {
        id: Math.random(),
        description: e.target.description.value,
        deadline: e.target.deadline.value,
        done: false
      };
      
      data.push(newTodo)
      this.setState({
        data
      })
      e.target.description.value = "";
      e.target.deadline.value = "";
    }

    removeTodo = (i) => {
      let data = [...this.state.data] 
      data.splice(i, 1);
      this.setState({
        data
      })
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do App</h1>
        </header>
        <AddTodo
          addItem = {this.addTodo} 
          />
        <Todos 
          items = {this.state.data} 
          handler = {this.toggleTodo}
          remove = {this.removeTodo}
         />
      </div>
    );
  }
}

export default App;
