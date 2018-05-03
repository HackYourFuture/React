import React, { Component } from 'react';
import './App.css';
import Todos from "./Todos.json";
import uuid from "uuid/v4"


class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: Todos
    }
  }

  onsubmit = (e) => {
    e.preventDefault()
    if(this.myTextInput.value !== "" && this.myDateInput.value ){
    let newState = {
      "id": uuid(),
      "description": this.myTextInput.value,
      "deadline": this.myDateInput.value,
      "done": false
    }
    this.setState({
      tasks: this.state.tasks.concat([newState])
    })
  }
    this.myTextInput.value = "";
    this.myDateInput.value = "";
  }
  handelCheck = (e, index, isDone) => {
    let state = this.state.tasks;
    if (state[index].done === true) {
      state[index].done = false;
    } else {
      state[index].done === true
    }
    this.setState({
      state
    })
  }
  remove = (e, id) => {
    this.setState({
      tasks: this.state.tasks.filter((ele) => {
        return ele.id !== id
      })
    })
  }

  render() {
    let tasks = this.state.tasks
    console.log(tasks)
    return (
      <div className="root">
        <form onSubmit={(e) => this.onsubmit(e)}>
          <input ref={(ref) => this.myTextInput = ref} name="Description" placeholder=" enter your task" type="text" className="text" />
          <input ref={(ref) => this.myDateInput = ref} type="date" name="Date" className="date" />
          <button type="submit" >Add</button>
        </form>
        {tasks.length > 0 ?
          <div className="tasks">

            {tasks.map((ele, index) =>

              <div className="task">
                <p>{ele.description}</p>
                <p><strong>{ele.deadline}</strong></p>
                <label> {ele.done === true ? "Done" : "not Done"} <input className="checkbox" type="checkbox" defaultChecked={ele.done == true ? true : false} onChange={(e) => this.handelCheck(e, index, ele.done)} /> </label>
                <button className="close" onClick={(e) => this.remove(e, ele.id)} >X</button>
              </div>


            )}
          </div>


          : <p className="msg"> No tasks  </p>}
      </div>

    );
  }
}

export default App;
