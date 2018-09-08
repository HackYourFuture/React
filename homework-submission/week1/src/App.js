import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import data from './sources/data.json';
import { inject, observer } from 'mobx-react';
import Store from './Store'

@inject('Store')
@observer
class App extends Component {
    // handler = e => {
    //   let todos = this.state.data;
    //   todos[e.target.id -1].done = !todos[e.target.id -1].done;
    //   this.setState({
    //     todos
    //   })
    // }

    // addTodo = e => {
    //   e.preventDefault();
    //   const {data} = this.state;
    //   const newTodo = {
    //     id: data.length + 1,
    //     description: e.target.description.value,
    //     deadline: e.target.deadline.value,
    //     done: false
    //   };
    //   data.push(newTodo)
    //   this.setState({
    //     data
    //   })
    //   e.target.description.value = "";
    //   e.target.deadline.value = "";
    // }

    // removeTodo = (i) => {
    //   this.state.data.splice(i, 1);
    //   console.log(i)
    //   this.setState({
    //     data: this.state.data
    //   })
    // }

    render() {
      const {
        handler,
        addTodo,
        removeTodo
      } = this.props.Store;
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
          // items = {this.state.data} 
          handler = {this.handler}
          remove = {this.removeTodo}
         />
      </div>
    );
  }
}

export default App;
