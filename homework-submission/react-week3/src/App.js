import React, { Component } from "react";
import AddingTodoForm from "./adding-form";
import RenderTodo from "./render-todo";
import EditingForm from "./editing-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Get out of bed",
          deadline: "2017-09-11",
          done: true
        },
        {
          id: 2,
          description: "Brush teeth",
          deadline: "2017-09-10",
          done: false
        },
        {
          id: 3,
          description: "Eat breakfast",
          deadline: "2017-09-09",
          done: false
        }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.markAs = this.markAs.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editMode = this.editMode.bind(this);
    this.cancelEditMode = this.cancelEditMode.bind(this);

  }

  addItem(e) {
    e.preventDefault();
    this.state.todos.push({
      id: Math.max(...this.state.todos.map(el => el.id)) + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    });
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
        el.description = item.description;
        el.deadline = item.deadline;
      }
    });
    this.setState({ editingMode: false, todos: this.state.todos });
  }
  markAs(item) {
    let Item = this.state.todos[this.state.todos.indexOf(item)];
    Item.done = !item.done;
    this.setState({ todos: this.state.todos });
  }

  renderItems() {
    return this.state.todos.map(todo => {
      if (todo.id === this.state.editingMode) {
        return (
          <EditingForm key={todo.id} todo={todo}
            updateItem={this.updateItem}
            cancelEditMode={this.cancelEditMode}
          />
        );
      } else {
        return (
          <RenderTodo key={todo.id} todo={todo}
            removeItem={this.removeItem}
            editMode={this.editMode}
            markAs={this.markAs}
          />
        );
      }
    });
  }

  render() {
    return (
      <div className="container">
        <AddingTodoForm addItem={this.addItem} />
        <ul className="list">
          {!this.state.todos[0] ? <h2>No items...</h2> : this.renderItems()}
        </ul>
      </div>
    );
  }
}

export default App;
