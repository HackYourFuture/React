import React, { Component } from 'react';
import todoItems from './todoItems.js';

class TodoList extends Component {

  todoItem = todoItems.map((item, i) => <li key={i}>{ "Task: " + item.description + " deadLine: " + item.deadLine}</li>);

  render() {
    return <ul>{this.todoItem}</ul>;
  }
}

export default TodoList;