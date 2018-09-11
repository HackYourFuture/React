import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddForm from './components/AddForm';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class App extends Component {
  componentWillMount() {
    this.props.todos.getTodos();
  }
  render() {
    return (
      <div className="App">
        {(this.props.todos.state === 'error') &&
          <div id='error'><p>Error connecting server, Please try again</p></div>}
        <TodoList />
        <AddForm />
      </div>
    );
  }
}

export default App;