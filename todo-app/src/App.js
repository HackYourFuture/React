import React from 'react'
import ToDo from './ToDo.js'
import { ToDos } from './toDos-DB.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ToDos: ToDos,
      newToDo: {
        todoDesc: ""
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
  }
  handleInputChange(event, toDoIndex) {
    let updatedToDos = this.state.ToDos.map((toDo, index) => {
      if (index == toDoIndex) {
        return Object.assign({}, toDo, { [event.target.name]: (event.target.name == "isDone") ? event.target.value == 'true' : event.target.value })
      }
      return toDo;
    });
    this.setState({
      ToDos: updatedToDos
    })
  }
  handleNewToDo(event) {
    let updatedToDo = Object.assign({}, this.state.newToDo,
      {
        [event.target.name]: event.target.value
      })
    this.setState({
      newToDo: updatedToDo
    })
  }
  sendForm(event) {
    event.preventDefault()
    let updatedToDo = Object.assign({}, this.state.newToDo, {
      date: new Date(),
      isDone: false,
      toDoControl: {
        update: 'none',
        edit: 'Edit'
      }
    })
    let updatedToDos = [...this.state.ToDos, updatedToDo]
    this.setState({
      ToDos: updatedToDos,
      newToDo: {
        todoDesc: ""
      }
    })
  }
  editToDo(toDoIndex) {
    let updatedToDos = this.state.ToDos.map((toDo, index) => {
      if (index == toDoIndex) {
        return Object.assign({}, toDo, {
          toDoControl: {
            update:this.state.ToDos[index].toDoControl.update=='block'?'none':'block',
            edit: this.state.ToDos[index].toDoControl.edit=='Cancel'?'Edit':'Cancel'
          }
        })
      }
      return toDo;
    });
    this.setState({
      ToDos: updatedToDos
    })
  }
  updateToDo(toDoIndex) {
    let updatedToDos = this.state.ToDos.map((toDo, index) => {
      if (index == toDoIndex) {
        return Object.assign({}, toDo, {
          toDoControl: {
            update: 'none',
            edit: 'Edit'
          }
        })
      }
      return toDo;
    });
    this.setState({
      ToDos: updatedToDos
    })
  }
  deleteToDo(toDoIndex) {
    let updatedToDos = this.state.ToDos
    updatedToDos.splice(toDoIndex, 1)
    this.setState({
      ToDos: updatedToDos
    })
  }
  renderToDos() {
    let toDoItems = this.state.ToDos;
    if (toDoItems.length > 0) {
      return toDoItems.map((toDo, index) => {
        return (
          <ToDo key={index} toDo={toDo} index={index} onChange={this.handleInputChange} controlActions={{
            deleteToDo: this.deleteToDo, updateToDo: this.updateToDo,
            editToDo: this.editToDo
          }} editToDO= {this.editToDO}/>
        )
      })
    }
    else {
      return <div>Empty list ....</div>
    }
  }


  render() {
    return (
      <div>
        <h1>ToDo List</h1>

        <form id="formAddToDo" onSubmit={this.sendForm}>
          <label>Wanna Add New <strong>ToDo</strong>?!!..</label><br /><br />
          <label>
            Todo Description :
            <input type="text" name="todoDesc" value={this.state.newToDo.todoDesc} onChange={this.handleNewToDo} />
          </label>
          <input className="buttonSupmit" type="submit" value="Add" />
        </form><br />
        {this.renderToDos()}
      </div>
    )
  }
}