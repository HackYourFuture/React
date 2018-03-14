import React, { Component } from 'react'
import moment from "moment"

import "./style.css"
import Header from "./components/Header.js"
import TodoList from "./components/TodoList"
import myTodoList from "./components/myTodoList.json"
import AddingContainer from "./components/AddingContainer"
import DeleteButton from "./components/DeleteButton"


class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem("todo list")) || myTodoList
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todo list", JSON.stringify(nextState.tasks))
  }
  nextId = () => {
    let uniqueId;
    const ids = []
    // eslint-disable-next-line
    this.state.tasks.map(task => {
      ids.push(task.id)
      uniqueId = Math.max(...ids) + 1

    })
    return uniqueId ? uniqueId : 1
  }
  addingTask = (description, deadLine) => {
    this.setState((previousState) => ({
      tasks: [
        {
          id: this.nextId(),
          description: description,
          deadLine: deadLine,
          done: false,
          creatingDate: moment().format("llll")
        },
        ...previousState.tasks]
    })
    )
  }
  handleCheckingBox = (taskId) => {
    const newState = this.state.tasks
    // eslint-disable-next-line
    newState.map(task => {
      // eslint-disable-next-line
      (taskId !== task.id) ? task : task.done = !task.done
    })
    this.setState({ tasks: newState })
  }
  remove = (taskId) => {
    const newState = this.state.tasks.filter(task => task.id !== taskId)
    this.setState({
      tasks: newState
    })
  }
  edit = (taskId, newDescription) => {
    const newState = this.state.tasks
    // eslint-disable-next-line
    newState.map(task => {
      // eslint-disable-next-line
      (taskId !== task.id) ? task : task.description = newDescription
    })
    this.setState({ tasks: newState })
  }
  handleDeletingAllCompleted = () => {
    const newState = this.state.tasks.filter(task => task.done === false)
    this.setState({ tasks: newState })
  }
  render() {
    return (
      <div>
        <Header />
        <AddingContainer onCreate={this.addingTask} />
        <DeleteButton onDeletingAll={this.handleDeletingAllCompleted} />
        <TodoList tasks={this.state.tasks}
          handleCheckingBox={this.handleCheckingBox}
          onRemove={this.remove}
          onEdit={this.edit}
        />
      </div>
    );
  }
}

export default App;
