import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";
import ItemData from "./ItemData.js";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ItemData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const newState = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todos: newState
      };
    });
  }

  render() {
    const Data = this.state.todos.map((todo, key) => (
      <Item todo={todo} key={key} handleChange={this.handleChange} />
    ));

    return (
      <div className="App">
        <Header />
        {this.state.todos.length === 0 ? (
          <ul className="noItems">No items...</ul>
        ) : (
          <ul>{Data}</ul>
        )}
      </div>
    );
  }
}

export default App;
