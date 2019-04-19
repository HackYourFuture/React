import React, { Component } from 'react';
import './App.css';

// Components
import Input from './components/input/index';
import Form from './components/form/index';
import Item from './components/listItem/index';

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
    const { value, name } = e.target;

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

  toggleDone = e => {
    const { todos } = { ...this.state };
    const { value } = e.target;
    const index = todos.indexOf(value);

    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.done = true;
      }
      return true;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = e => {
    const { todos } = { ...this.state };
    const { value } = e.target;
    const index = todos.indexOf(value);

    const newTodos = todos.map((todo, i) => {
      return index === i;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;

    const todoList = todos.map((todo, index) => {
      console.log(todo);
      return (
        <Item key={index} className={todo.done ? 'done' : null} handleDone={this.toggleDone}>
          {todo.desc} - {todo.deadline}
        </Item>
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
          <Input name="done" type="text" handleChange={this.handleChange} />
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
