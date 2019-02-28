import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: 'Practice for staatsexamen' },
        { id: 1, text: 'Jogging.' },
        { id: 2, text: "Do the HYF's homework" },
        { id: 3, text: 'Feed my cat' },
      ],
      nextId: 4,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + this.state.nextId, // is easier ++this.state.nextId but I am getting warnings.
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
          <TodoInput todoText="" addTodo={this.addTodo} />
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
