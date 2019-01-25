import React, { Component } from 'react';
import './App.css';
import './index.css'
import TodoList from './TodoList'
import Title from './Title';
import data from './data.json';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    data: data
  }

  checkBoxHandler = (index) => {
    const item = [...this.state.data]
    item[index].done = !item[index].done
    this.setState({ item })
  };

  onAdd = (description, deadline) => {
    const max = this.state.data.length > 0 ? Math.max.apply(Math, this.state.data.map(i => i.id)) : 0
    const id = max + 1;
    const task = { id, description, deadline, "done": false }
    this.setState({
      data: [...this.state.data, task]
    });
  }
  onDelete = (index) => {
    const todos = [...this.state.data]
    todos.splice(index, 1)
    this.setState({ data: todos })
  }

  onUpdateSubmit = (description, deadline, index) => {
    const newTodos = [...this.state.data];
    newTodos[index].description = description;
    newTodos[index].deadline = deadline;
    this.setState({ data: newTodos })
  };

  render() {
    return (
      <div className="App">
        <Title title="Todo List" />
        <TodoList data={this.state.data}
          handler={this.checkBoxHandler}
          deleteHandler={this.onDelete}
          updateHandler={this.onUpdateSubmit}
        />
        <AddTodo onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;