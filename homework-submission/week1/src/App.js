import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import todoObj from './todo.json';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todoObj,
    editing: -1
  };

  checkBoxHandler = (e) => {
    const idx = e.target.id;
    const todos = this.state.todoObj;
    const result = todos.map(item => {
      if (item.id === parseInt(idx, 10)) item.done = !item.done;
      return item;
    });
    this.setState({ todoObj: result });
  }

  deleteHandler = (e) => {
    const idx = e.target.id;
    const todos = this.state.todoObj;
    const result = todos.filter(item => item.id !== parseInt(idx, 10));
    this.setState({ todoObj: result });
  }

  editHandler = (edit, id) => {
    const newId = edit ? id : -1; // edit = true mean a new todo is now editing, false mean editing cancel.
    this.setState({ editing: newId })
  }

  updateHandler = (id, newDescription) => {
    this.setState({ editing: -1 });
    const todos = this.state.todoObj;
    const result = todos.map(item => {
      if (item.id === parseInt(id, 10)) item.description = newDescription;
      return item;
    });
    this.setState({ todoObj: result });

  }

  addHandler = (description, deadline) => {
    const id = this.state.todoObj.length !== 0 ? this.state.todoObj[this.state.todoObj.length - 1].id + 1 : 1;
    const todo = {
      id,
      description,
      deadline,
      "done": false
    }
    const todos = this.state.todoObj;
    todos.push(todo);
    this.setState({ todoObj: todos });
  }

  render() {
    return (
      <div className="App">
        <TodoList listObj={this.state.todoObj}
          editing={this.state.editing}
          checkBoxHandler={this.checkBoxHandler}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
          updateHandler={this.updateHandler}
        />
        <AddForm addHandler={this.addHandler} />
      </div>
    );
  }
}

export default App;
