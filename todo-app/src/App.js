import React, { Component } from 'react';
import Header from './Components/Header'
import Container from './Components/Container'
import { LoadFromLocalStorage, SaveToLocalStorage} from './localStorage'

import './App.css';
import data from './todoList.json';

class App extends Component {
  state = {
    todoItems: LoadFromLocalStorage() || data
  }

  componentDidUpdate = () => {
    SaveToLocalStorage(this.state.todoItems)
  }

  handelSelected = (id) => {
    const todoItems = this.state.todoItems.map(task => {
      if (task.id === id) {
        return {
          "id": task.id,
          "description": task.description,
          "deadline": task.deadline,
          "selected": !task.selected
        }
      } else {
        return {
          "id": task.id,
          "description": task.description,
          "deadline": task.deadline,
          "selected": task.selected
        }
      }
    })
    console.log(todoItems);
    this.setState({ todoItems })
  }

  handelNewTask = (newTask, newDeadLine) => {

    const todoItems = this.state.todoItems
    const id = this.state.todoItems.map(task => task.id)
    const newId = Math.max(...id) + 1
    todoItems.push({
      "id": newId,
      "description": newTask,
      "deadline": newDeadLine,
      "selected": false
    })
    this.setState({ todoItems })
  }

  handelUpdateTask = (id, update) => {
    const todoItems = this.state.todoItems.map(task => {
      if (task.id === id) {
        return {
          "id": task.id,
          "description": update,
          "deadline": task.deadline,
          "selected": task.selected
        }
      } else {
        return {
          "id": task.id,
          "description": task.description,
          "deadline": task.deadline,
          "selected": task.selected
        }
      }
    })
    this.setState({ todoItems })
  }

  handelDeleteTask = (id, selected) => {

    const todoItems = this.state.todoItems.filter(task => task.id !== id)
    todoItems.map((item, index) => {
      item.id = index + 1
    })
    this.setState({ todoItems })
  }

  render() {

    return (

      <div className="App">
        <div className="Header"><Header /></div>
        <div><Container todoItems={this.state.todoItems}
          handelSelected={this.handelSelected}
          handelDeleteTask={this.handelDeleteTask}
          handelUpdateTask={this.handelUpdateTask}
          handelNewTask={this.handelNewTask} />
        </div>
      </div>
    );
  }
}

export default App;
