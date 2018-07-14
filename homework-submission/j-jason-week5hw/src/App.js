import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoList from './components/todoList';
import { inject, observer } from 'mobx-react'

@inject('todoStore')
@observer
class App extends Component {
  render() {
    const {
      listTodo,
      addFunction,
      handleDoneClick,
      removeTodo
    } = this.props.todoStore;
    return (
      <div className="App">
        <Header />
        <TodoList
          listTodo={listTodo}
          addFunction={addFunction}
          handleDoneClick={handleDoneClick}
          removeTodo={removeTodo} />
      </div>
    );
  }
}

export default App;
