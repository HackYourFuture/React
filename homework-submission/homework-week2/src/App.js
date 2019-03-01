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
    this.updateTodoList = this.updateTodoList.bind(this);
  }
  deleteTodo(index) {
    this.setState({ todo: this.state.todo.filter(elem => elem !== this.state.todo[index]) });
  }
  updateTodoList(newTodo) {
    const newTodoArray = this.state.todo.slice();
    newTodoArray.push(newTodo);
    this.setState({ todo: newTodoArray });
  }

  render() {
    return (
      <div className="App">
        <TodoForm updateTodoList={data => this.updateTodoList(data)} />
        <DynamicList todo={this.state.todo} deleteTodo={index => this.deleteTodo(index)} />
      </div>
    );
  }
}

export default App;
