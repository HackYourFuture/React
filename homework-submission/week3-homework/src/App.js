import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import List from "./components/List";
import Checkbox from "./components/Checkbox";
import todos from "./source/todos.json";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleClick = this.handleClick.bind(this);
    this.AddTodo = this.AddTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  handleClick(id) {
    let todos = this.state.todos.slice();
    let foundTodo = todos.find(todo => id === todo.id);
    foundTodo.done = !foundTodo.done;
    this.setState({ todos: todos });
  }

  AddTodo(newTodo) {
    let todos = this.state.todos.slice();
    const uuidv4 = require("uuid/v4");
    todos.push({
      id: uuidv4(),
      description: newTodo,
      done: false
    });

    this.setState({ todos: todos });
  }

  deleteTodo(todo) {
    let todos = this.state.todos.slice();
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }

  updateTodo(oldTodo, newTodo) {
    const foundTodo = this.state.todos.find(
      todo => todo.description === oldTodo
    );
    foundTodo.description = newTodo;

    this.setState({ todos: this.state.todos });
  }

  render() {
    let todoItems = this.state.todos.map((todo, index) => (
      <TodoItem
        key={index}
        {...todo}
        index={index}
        onRemove={() => {
          this.deleteTodo(todo);
        }}
        onUpdate={this.updateTodo}
      >
        <Checkbox
          key={index}
          done={todo.done}
          onClick={() => {
            this.handleClick(todo.id);
          }}
          index={index}
        />
      </TodoItem>
    ));
    let contentToDisplay =
      this.state.todos.length === 0 ? (
        <p id="no-todos">No todos yet... </p>
      ) : (
        <List>{todoItems}</List>
      );
    return (
      <div className="App">
        <Header />
        <AddTodoForm AddTodo={this.AddTodo} />
        {contentToDisplay}
      </div>
    );
  }
}
export default App;
