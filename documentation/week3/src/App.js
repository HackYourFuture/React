import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Task from './components/Task';
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

  // handleClick = (id) => {
  //   const todos = this.state.todos;
  //   todos[id].done = !todos[id].done;
  //   this.setState({ todos });
  // }

  handleClick = (todoId) => {
    const newTodoList = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        todo.done = !todo.done
      }
      return todo
    })
    this.setState({ todos: newTodoList })
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
  }

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todo.id)
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


        {this.state.todos.map((todo, id) => {

          return (
            <Task
              key={todo.id}
              id={todo.id}
              discription={todo.discription}
              deadline={todo.deadline}
              done={todo.done}
              handleClick={this.handleClick}
              handleDelete={this.handleDelete}
            />
          )

        })}

      </div>
    );
  }
}
