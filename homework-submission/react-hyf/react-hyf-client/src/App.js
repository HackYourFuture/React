import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 4,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodos().then(todos => {
      this.setState({
        todos,
      });
    });
  }

  fetchTodos = async () => {
    const response = await fetch('/todos');
    const data = await response.json();
    return data;
  };

  addTodo(todoText) {
    let todos = [...this.state.todos];
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1,
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
