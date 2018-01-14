import React, { Component } from 'react';
import TodoList from './TodoList';

export default class TodoApp extends Component {


  render() {
    return (
      <div className="TodoApp">
        <h2>TODO LIST</h2>
        <TodoList/>
      </div>  
    )
  }
} 