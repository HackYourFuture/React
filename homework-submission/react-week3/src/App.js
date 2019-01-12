import React, { Component } from 'react';
import AddingTodoForm from './adding-form';
import RenderTodo from './render-todo';
import EditingForm from './editing-form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "todos": [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
    };
  }

  addItem(e) {
    e.preventDefault();
    this.state.todos.push({
      id: Math.max(...this.state.todos.map(el => el.id)) + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    })
    this.setState({ todos: this.state.todos });
  }
  removeItem(item) {
    this.setState({ todos: this.state.todos.filter(el => el.id !== item.id) });
  }
  editMode(item) {
    this.setState({ editingMode: item.id });
  }
  cancelEditMode() {
    this.setState({ editingMode: false });
  }
  updateItem(item) {
    this.state.todos.forEach(el => {
      if (el.id === item.id) {
        el.description = item.description; el.deadline = item.deadline;
      }
    });
    this.setState({ editingMode: false, todos: this.state.todos });
  }
  markAs(item) {
    this.state.todos.forEach(el => {
      if (el.id === item.id) {
        el.done = el.done ? el.done = false : el.done = true;
      }
    });
    this.setState({ todos: this.state.todos });
  }

  renderItems() {
    return this.state.todos.map(todo => {
      if (todo.id === this.state.editingMode) {
        return <EditingForm key={todo.id}
          todo={todo}
          updateItem={this.updateItem.bind(this)}
          cancelEditMode={this.cancelEditMode.bind(this)}
        />
      } else {
        return <RenderTodo key={todo.id}
          todo={todo}
          removeItem={this.removeItem.bind(this)}
          updateItem={this.updateItem.bind(this)}
          editMode={this.editMode.bind(this)}
          markAs={this.markAs.bind(this)}
        />
      }
    });
  }
  render() {
    return (
      <div>
        <AddingTodoForm addItem={this.addItem.bind(this)} />
        {!this.state.todos[0] ? <h2>No items...</h2> : this.renderItems()}
      </div>
    );
  }
}
export default App;
