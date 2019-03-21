import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { getAll, create, remove } from './api/todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    getAll().then(todos => {
      this.setState({
        todos,
      });
    });
  }

  addTodo(text) {
    create(text)
      .then(todo => {
        const todos = [...this.state.todos];
        todos.push(todo);
        this.setState({
          todos,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(id) {
    remove(id)
      .then(todos => {
        this.setState({
          todos,
        });
      })
      .catch(error => {
        console.log(error);
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
