import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TODOList from './components/TODOList';
import AddingForm from './components/AddingForm';
import { inject, observer } from "mobx-react";

@inject("TodoListStore")

@observer
class App extends Component {
  render() {
    const { checkStatus, addTodoItem, removeTodoItem, TODOListItems, todosCounter } = this.props.TodoListStore;
    const title = 'My TODO List';
    return (
      <div className="root">
        <div className="App">
          <Header />
          <section>
            <h1>{title}</h1>
            <AddingForm addTodoItem={addTodoItem} />
            <TODOList checkStatus={checkStatus} TODOListItems={TODOListItems}
              removeTodoItem={removeTodoItem} />
            {(todosCounter === 0) ? <h5>There is no items</h5> : null}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
