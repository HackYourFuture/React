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
    const oldState = this.state.todos;
    const ItemData = oldState.push(newItem);
    this.setState({ ItemData });
  };

  handleRemove = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleUpdate = (newItem, index) => {
    this.setState(prevState => {
      prevState.todos[index] = newItem;
      return prevState;
    });
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
        onCancel={this.handleCancel}
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
