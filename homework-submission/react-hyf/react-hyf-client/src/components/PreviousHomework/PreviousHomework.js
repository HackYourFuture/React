import React, { Component } from 'react';
import Todos from './TodosList';
import TodoForm from './AddForm';

class PreviousHomework extends Component {
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
    const todoList = [...this.state.todoList, todo];
    this.setState({
      todoList
    })
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <Todos todos={this.state.todoList} deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}

export default PreviousHomework;