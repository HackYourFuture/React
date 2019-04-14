import React, { Component } from 'react';
import './index.css';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
