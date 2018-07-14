import React from 'react';
import './App.css';
import todos from "./components/todos.json";
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";

class App extends React.Component {

  state = { todos };

  addTodo = e => {
    e.preventDefault();
    const { todos } = this.state;
    const newTodo = {
      id: todos.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    todos.push(newTodo)
    this.setState({
      todos
    });
  };

  removeTodo = index => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({
      todos
    });
  };

  updateTodo = (e, index, toggleUpdating) => {
    e.preventDefault();
    todos[index] = {
      id: index + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    this.setState({
      todos
    });
    toggleUpdating();
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App" >
        <h1>To do app :</h1>
        <ul><AddForm addTodo={this.addTodo} /></ul>
        {todos.length > 0 ? (
          <ul>
            <TodoList
              todos={todos}
              removeTodo={this.removeTodo}
              toggleUpdating={this.toggleUpdating}
              updateTodo={this.updateTodo}
            />
          </ul>
        ) : ("No items...")
        }
      </div>
    );
  };
}
export default App;
