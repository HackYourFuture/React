import React, { Component } from 'react';
import "./style.css"
import Header from "./components/Header.js"
import TodoList from "./components/TodoList"
import myTodoList from "./components/myTodoList.json"
import moment from "moment"


class App extends Component {
  state = {
    tasks: myTodoList
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todo list", JSON.stringify(nextState.tasks))
  }
  componentDidMount() {
    if (localStorage.getItem("todo list")) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("todo list")) })
    }
  }
  nextId = () => {
    if (this.state.tasks.length === 0) {
      return 1;
    }
    let uniqueId = this.state.tasks[0].id;
    return uniqueId += 1;
  }
  addingTask = (description, deadLine) => {
    this.setState((previousState) => ({
      tasks: [{ id: this.nextId(), description: description, deadLine: deadLine, done: false, creatingDate: moment().format("llll") }, ...previousState.tasks]
    })
    )
  }
  handleCheckingBox = (taskId) => {
    const newState = this.state.tasks
    newState.forEach(task => {
      // eslint-disable-next-line
      (taskId !== task.id) ? task : task.done = !task.done
    })
    this.setState({ tasks: newState })
  }
  remove = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }))
  }
  edit = (taskId, newDescription) => {
    const newState = this.state.tasks
    newState.forEach(task => {
      // eslint-disable-next-line
      (taskId !== task.id) ? task : task.description = newDescription
    })
    this.setState({ tasks: newState })
  }
  render() {
    return (
      <div>
        <Header />
        <TodoList tasks={this.state.tasks}
          handleCheckingBox={this.handleCheckingBox}
          onRemove={this.remove}
          onEdit={this.edit}
          onCreate={this.addingTask}
        />
      </div>
    );
  }
}

export default App;
