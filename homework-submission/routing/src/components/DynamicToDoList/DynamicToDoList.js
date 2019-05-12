import React, { Component } from 'react';
import './index.css';
import TodoList from './TodoList';

class DynamicToDoList extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
export default DynamicToDoList;
