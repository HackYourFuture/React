import React, { Component } from 'react';
<<<<<<< HEAD
import { inject, observer } from 'mobx-react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

@inject('TasksStore')
@observer

class App extends Component {
  render() {
    const { TasksStore } = this.props;
    return (
      <div className="App">
        <Form
          onAdd={TasksStore.handleAdd}

        />
        <List
          handleCheck={TasksStore.handleCheck}
          todos={TasksStore.todos}
          handleRemove={TasksStore.handleRemove}

        />
=======
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
>>>>>>> 5cb3e17339dff517c41b308c7cc994316f6d20b4
      </div>
    );
  }
}

export default App;
