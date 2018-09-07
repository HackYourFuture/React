import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import List from "./components/List";
import Checkbox from "./components/Checkbox";
import todos from "./source/todos.json";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import uuidv4 from "uuid/v4";

class App extends React.Component {
  state = {
    todos
  };

  handleClick = id => {
    let todos = this.state.todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        };
      }

      return todo;
    });
    this.setState({ todos: todos });
  };

  AddTodo = newTodo => {
    let todos = this.state.todos.slice();
    todos.push({
      id: uuidv4(),
      description: newTodo,
      done: false
    });

    this.setState({ todos: todos });
  };

  deleteTodo = todo => {
    let todos = this.state.todos.slice();
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  };

  updateTodo = (oldTodo, newTodo) => {
    let todos = this.state.todos.map(todo => {
      if (todo.description === oldTodo) {
        return {
          ...todo,
          description: newTodo
        };
      }

      return todo;
    });

    this.setState({ todos: todos });
  };

  render() {
    let todoItems = this.state.todos.map((todo, index) => (
      <TodoItem
        key={index}
        {...todo}
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
