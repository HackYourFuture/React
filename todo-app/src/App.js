import React from 'react'
import ToDo from './ToDo.js'
import {ToDos} from './toDos-DB.js'

export default class App extends React.Component {
  renderToDos(toDos) {
    return toDos.map((toDo, index) => {
      return (
        <ToDo key={index} toDo={toDo} index={index} />
      )

    })
  }
  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        {this.renderToDos(ToDos)}
      </div>
    )
  }
}