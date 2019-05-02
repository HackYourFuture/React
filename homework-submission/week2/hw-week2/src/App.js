import React, { Component } from 'react';
import './App.css';

// Components
import Input from './components/input/index';
import Form from './components/form/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: {
        desc: '',
        deadline: '',
        done: false,
      },
    };
  }

  handleChange = e => {
    const { newTodo } = { ...this.state };
    const { name, type, checked } = e.target;
    const value = type === 'checkbox' ? checked : e.target.value;

    newTodo[name] = value;
    this.setState({
      newTodo: newTodo,
    });
  };

  submit = e => {
    e.preventDefault();
    const { todos, newTodo } = this.state;

    todos.push({ ...newTodo });
    this.setState({
      todos: todos,
    });
  };

  toggleDone = index => {
    const { todos } = { ...this.state };

    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: [...newTodos] });
  };

  deleteTodo = index => {
    const { todos } = { ...this.state };

    const newTodos = todos.filter((todo, i) => {
      return index !== i;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    const todoList = todos.map((todo, index) => {
      console.log(todo);
      return (
        <li
          key={index}
          className={todo.done ? 'done' : 'undone'}
          onClick={() => this.toggleDone(index)}
          onDoubleClick={() => this.deleteTodo(index)}
        >
          {todo.desc} ==> {todo.deadline}
        </li>
      );
    });
    console.log(this.state);

    return (
      <React.Fragment>
        <Form submit={this.submit}>
          <Input
            name="desc"
            type="text"
            placeholder="type a todo"
            handleChange={this.handleChange}
          />
          <Input
            name="deadline"
            type="text"
            placeholder="DD-MM-YYYY"
            handleChange={this.handleChange}
          />
          <Input name="done" type="checkbox" handleChange={this.handleChange} />
          <Input
            name="submit"
            type="submit"
            buttonTitle="Send it away"
            handleChange={this.handleChange}
          />
        </Form>
        <ul>{todoList}</ul>
      </React.Fragment>
    );
  }
}

export default App;
