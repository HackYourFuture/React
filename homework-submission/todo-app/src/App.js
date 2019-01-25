import React, { Component } from "react";
import "./App.css";
import Item from "./components/Item";
import ItemData from "./components/ItemData";
import MainForm from "./components/MainForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ItemData
    };
  }

  handleCompleted = index => {
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  handleSubmit = newItem => {
    const todos = [...this.state.todos];
    todos.push(newItem);
    this.setState({ todos });
  };

  handleRemove = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleUpdate = (newItem, index) => {
    const todos = [...this.state.todos];
    todos[index] = newItem;
    this.setState({ todos });
  };

  render() {
    const data = this.state.todos.map((todo, key) => (
      <Item
        todo={todo}
        key={key}
        index={key}
        onCompleted={this.handleCompleted}
        onEdit={this.handleEdit}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
      />
    ));
    return (
      <div className="App">
        <header className="App-header">Todo List </header>
        <MainForm onSubmit={this.handleSubmit} />
        {this.state.todos.length === 0 ? (
          <p className="noItems">No items...</p>
        ) : (
          <ul>
            <div className="listContainer">{data} </div>
          </ul>
        )}
      </div>
    );
  }
}

export default App;
