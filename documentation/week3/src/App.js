import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import data from './data/todos.json';
import { loadFromLocalStorage, saveToLocalStorage } from './storage/localStoarge';
export default class App extends Component {

  state = loadFromLocalStorage() || {
    todos: data,
    id: 1,
    discription: '',
    deadline:''
  }


  handleDiscriptionChange = (event) => {
    event.preventDefault();
    this.setState({
      discription: event.target.value
    })
  }

  handleDeadlineChange = (event) => {
    event.preventDefault();
    this.setState({
      deadline: event.target.value
    })
  }

  handleClick = (id) => {
    const todos = this.state.todos;
    todos[id].done = !todos[id].done;
    this.setState({ todos });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      discription: this.state.discription,
      deadline:this.state.deadline,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, discription: '' ,deadline:''})
    console.log(this.state.discription + ' ' + this.state.deadline);
  }
  //this function did not work and until now i try to fix it..
  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo, id) => todo.id !== id)
    });
  }

  componentDidUpdate = () => {
    saveToLocalStorage(this.state)
  }


  render() {

    return (

      <div className="App">

        <Form
          handleDiscriptionChange={this.handleDiscriptionChange}  
          handleDeadlineChange={this.handleDeadlineChange}
          inputValue={this.state.inputValue}
          handleSubmit = {this.handleSubmit}
        />

        <List
          handleClick={this.handleClick}  
          todos={this.state.todos}  
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
