import React, { Component } from 'react';
import './App.css';
import AddForm from './MyStore/AddForm';
import TodoList from './MyStore/TodoList';
import { inject, observer } from "mobx-react";

@inject("TodoListStore")
@observer

class App extends Component {

  render() {

    const {
      TodoListItems,
      addTodo,
      removeTodo,
      toggleUpdating,
      updateTodo,
      todosCounter
    } = this.props.TodoListStore;

    return (
      <div className="App">
        <AddForm addTodo={addTodo} />
        <TodoList
          TodoListItems={TodoListItems}
          removeTodo={removeTodo}
          toggleUpdating={toggleUpdating}
          updateTodo={updateTodo}
        />
        {(todosCounter === 0) ? <p>...No items</p> : null}
      </div>
    );
  }
}

export default App;
