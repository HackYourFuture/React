import React, { Component } from 'react';
import { Provider } from "mobx-react";
import {todoStore} from './stores';
import TodoList from './TodoList';

export default class TodoApp extends Component {


  render() {
    return (
      <Provider todoStore={todoStore}>
        <div className="TodoApp">
          <h2>TODO LIST</h2>
          <TodoList/>
        </div>
      </Provider>    
    )
  }
} 