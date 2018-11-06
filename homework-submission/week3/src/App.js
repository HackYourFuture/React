import React, { Component } from "react";
import "./App.css";
import TodoApp from "./todo/TodoApp";
import todos from "./todo/todos";

class App extends Component {
  state = {
    todos
  };

  handelChange = id => {
    const newTodos = this.state.todos.map(todo => {
      const newTodo = {
        ...todo,
        done: todo.id === id ? !todo.done : todo.done
      };
      return newTodo;
    });
    this.setState({ todos: newTodos });
  };

  onAdd = value => {
    const id = this.state.todos.length + 1;
    value.id = id;
    const newTodos = [...this.state.todos, value];
    this.setState({
      todos: newTodos
    });
  };

  onUpdate = (id, description, deadline) => {
    const newTodos = [...this.state.todos];
    const result = newTodos.find(todo => todo.id === id);
    result.description = description;
    result.deadline = deadline;
    this.setState({
      todos: newTodos
    });
  };

  onRemove = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <TodoApp
          todos={this.state.todos}
          onChange={this.handelChange}
          onRemove={this.onRemove}
          onAdd={this.onAdd}
          onUpdate={this.onUpdate}
        />
      </div>
    );
  }
}

export default App;
