import React, { Component } from 'react';
import './App.css';
import Todos from './components/TodosList';
import AddTodo from './components/AddForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
 };

  }
  deleteTodo = (id) => {
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todoList
    })
  }
  
  addTodo = (todo) => {
    todo.id = Math.random();
    let todoList = [...this.state.todoList, todo];
    this.setState({
      todoList
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todoList} deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}

export default App;
