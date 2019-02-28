import React, { Component } from 'react';
import './App.css';
import arr from './todo.json';
import DynamicList from './components/DynamicList';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: arr };
  }
  deleteTodo(index) {
    this.setState({ todo: this.state.todo.filter(elem => elem !== this.state.todo[index]) });
  }
  updateTodoList(newTodo) {
    const copiedArr = [...arr];
    copiedArr.push(newTodo);
    this.setState({ todo: copiedArr });
  }

  render() {
    return (
      <div className="App">
        <TodoForm updateTodoList={data => this.updateTodoList(data)} />
        <DynamicList todo={this.state.todo} deleteTodo={this.deleteTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
