import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Todos from "./Todos.json";

let IsDone = []

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: Todos,
      msg: "No items"


    }
  }

  handelCheck = (checked, id) => {
    let newState = this.state.tasks;
    newState.map((ele, index) => {
      if (ele.id === id) {
        if (ele.done === true) {
          ele.done = false;
          this.setState({
          })
        } else {
          ele.done = true
        }
        this.setState({
          tasks: newState
        })
        IsDone = []
      }
    })
    for (let key in newState) {
      IsDone.push(newState[key].done)
    }
    console.log(IsDone)
    this.check(IsDone)
  }
  check = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] = false) {
        return true;
      } else {
        return false;
      }

    }


  }
  render() {
    let tasks = this.state.tasks
    return (
      <div className="root">
        {this.check ? tasks.map((task, i) =>

          <div className="todo">
            <h3> {task.description}</h3>

            <h4>Deadline: {task.deadline}</h4>
            <label class="checkbox">{task.done ? "Done" : "Not Done"}
              <input type="checkbox" defaultChecked={task.done ? true : false} onChange={(e) => { this.handelCheck(task.done, task.id) }} />
              <span class="checkmark"></span>
            </label>

          </div>

        ) : this.state.msg}

      </div>
    );
  }
}

export default App;
