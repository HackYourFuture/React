import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import TodoItems from './components/createDynamicList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }
  componentDidMount() {
    //fetch todos
    this.fetchTodos().then(todos => {
      this.setState({
        todos,
      });
    });
  }

  fetchTodos = async () => {
    const response = await fetch('/todos');
    const parsedJSON = await response.json();
    return parsedJSON;
  };

  //Delete Todos
  deleteAllTodos = async () => {
    const response = fetch('/todos', {
      method: 'DELETE',
    });
    response.then(data => console.log(data));
    this.setState({
      todos: [],
    });
  };

  // Delete single todo
  deleteTodo = key => {
    const response = fetch('/todos/:id', {
      method: 'Delete',
    });
    const todos = [...this.state.todos];
    const filteredItems = [...this.state.todos].filter(item => {
      return item.key !== key;
    });
    response.then(data => console.log(data));

    this.setState({
      todos: filteredItems,
    });
  };

  SubmitAddTodo = event => {
    const response = fetch('/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ key: Date.now(), name: this.state.newTodo }),
    });
    response.then(data => console.log(data));

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, { key: Date.now(), name: this.state.newTodo }],
    });
    event.preventDefault();
  };

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

export default App;
