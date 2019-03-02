import React, { Component } from 'react';
import './App.css';
import arr from './todo.json';
import DynamicList from './components/DynamicList';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: arr };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodoList = this.addTodo.bind(this);
  }
  deleteTodo(index) {
    const todo = [...this.state.todo];
    todo.splice(index, 1);
    this.setState({ todo });
  }
  addTodo(newTodo) {
    const newTodoArray = this.state.todo.slice();
    newTodoArray.push(newTodo);
    this.setState({ todo: newTodoArray });
  }

  render() {
    return (
      <div className="App">
        <TodoForm addTodo={data => this.addTodo(data)} />
        <DynamicList todo={this.state.todo} deleteTodo={index => this.deleteTodo(index)} />
      </div>
    );
  }
}

export default App;
