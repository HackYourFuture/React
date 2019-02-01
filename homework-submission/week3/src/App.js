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
    console.log(index);
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
    let doneTasks = [...this.state.data].filter((i) => { return i.done })
    let notDoneTasks = [...this.state.data].filter((i) => { return !i.done })
    console.log(doneTasks)
    console.log(notDoneTasks)
    const doneTodo = doneTasks.map((item, index) => {
      return (
        (<TodoList index={index} data={[item]}
          handler={this.checkBoxHandler}
          deleteHandler={this.onDelete}
          updateHandler={this.onUpdateSubmit}
        />)
      )
    }
    )
    const notdoneTodo = notDoneTasks.map((item, index) =>
      (<TodoList index={index} data={[item]}
        handler={this.checkBoxHandler}
        deleteHandler={this.onDelete}
        updateHandler={this.onUpdateSubmit}
      />)
    )

    return (
      <div className="App">
        <Title title="Todo List" />
        <div className="donebox"> {doneTodo}</div>
        <div className='notdonebox'> {notdoneTodo}</div>
        <AddTodo onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;