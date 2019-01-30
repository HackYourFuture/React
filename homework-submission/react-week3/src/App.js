import React, { Component } from "react";
import AddingTodoForm from "./adding-form";
import RenderTodo from "./render-todo";
import EditingForm from "./editing-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingMode: 0,
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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMarkAs = this.handleMarkAs.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEditingMode = this.handleEditingMode.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({
      id: Math.max(...this.state.todos.map(el => el.id)) + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    });
    this.setState({ todos });
  }
  handleRemove(item) {
    this.setState({ todos: this.state.todos.filter(el => el.id !== item.id) });
  }
  handleEditingMode(item) {
    item.id ? this.setState({ editingMode: item.id }) : this.setState({ editingMode: 0 });
  }

  handleUpdate(item) {
    const todos = this.state.todos;
    todos[item.index].description = item.description;
    todos[item.index].deadline = item.deadline;
    todos[item.index].done = false;
    this.setState({ editingMode: 0, todos });
  }
  handleMarkAs(index) {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  renderItems() {
    return this.state.todos.map((todo, i) => {
      if (todo.id === this.state.editingMode) {
        return (
          <EditingForm key={todo.id} todo={todo} index={i}
            onUpdate={this.handleUpdate}
            cancelEditingMode={this.handleEditingMode}
          />
        );
      } else {
        return (
          <RenderTodo key={todo.id} todo={todo} index={i}
            onRemove={this.handleRemove}
            enterEditingMode={this.handleEditingMode}
            onMarkAs={this.handleMarkAs}
          />
        );
      }
    });
  }

  render() {
    return (
      <div className="container">
        <AddingTodoForm onAdd={this.handleAdd} />
        <ul className="list">
          {!this.state.todos[0] ? <h2>No items...</h2> : this.renderItems()}
        </ul>
      </div>
    );
  }
}

export default App;
