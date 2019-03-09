import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import TodoItems from './components/createDynamicList';

class PreviousHomeworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { key: Date.now() + 0, name: 'watch movie' },
        { key: Date.now() + 1, name: 'Library' },
        { key: Date.now() + 2, name: 'study' },
      ],
      newTodo: '',
    };
  }
  clearAddtodo = () => {
    this.setState({
      newTodo: '',
    });
  };

  onChangeAddtodo = event => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  SubmitAddTodo = event => {
    console.log(this.state);
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, { key: Date.now(), name: this.state.newTodo }],
    });

    event.preventDefault();
  };

  deleteAllTodos = () => {
    this.setState({
      todos: [],
    });
  };

  deleteTodo = key => {
    const todos = [...this.state.todos];
    console.log(todos);
    const filteredItems = this.state.todos.filter(item => {
      return item.key !== key;
    });
    this.setState({
      todos: filteredItems,
    });
  };

  render() {
    return (
      <div className="TodoListMain">
        <div className="header">
          <h1> Todo APP </h1>
          <br />
          <form onSubmit={this.SubmitAddTodo}>
            <label>
              TodoItem:
              <input
                type="text"
                name="add-todo"
                onChange={this.onChangeAddtodo}
                value={this.state.newTodo}
              />
            </label>
            <br />
            <Button onClick={this.SubmitAddTodo} name="Add" />
          </form>
          <br />
          <TodoItems entries={this.state.todos} delete={this.deleteTodo} />

          <Button onClick={this.deleteAllTodos} name="Delete All Todos" />
        </div>
      </div>
    );
  }
}

export default PreviousHomeworks;
