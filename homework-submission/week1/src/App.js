import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer
class App extends Component {
    render() {
      const {
        handler,
        addTodo,
        removeTodo,
        data
      } = this.props.Store;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do App</h1>
        </header>

        <AddTodo
          addItem = {addTodo} 
          />
        <Todos 
          handler = {handler}
          remove = {removeTodo}
          items = {data}
         />
      </div>
    );
  }
}

export default App;
