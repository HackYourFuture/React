import React from 'react'
import ToDo from './ToDo.js'
import { ToDos } from './toDos-DB.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ToDos: ToDos,
      newToDo: {
        todoDesc:""
      },
      upatingTodoIndex:null
    }
  }
  onChangeToDoStatus = (toDoIndex) => {
    let updatedToDos = this.state.ToDos.map((toDo, index) => {
      if (index === toDoIndex) {
        return Object.assign({}, toDo, { isDone: !this.state.ToDos[index].isDone})
      }
      return toDo;
    });
    this.setState({
      ToDos: updatedToDos
    })
  }
  handleNewToDo = (event) => {
    let updatedToDo = Object.assign({}, this.state.newToDo,
      {
        [event.target.name]: event.target.value
      })
    this.setState({
      newToDo: updatedToDo
    })
  }
  sendForm = (event) => {
    event.preventDefault()
    let updatedToDo = Object.assign({}, this.state.newToDo, {
      date: new Date(),
      isDone: false
    })
    let updatedToDos = [...this.state.ToDos, updatedToDo]
    this.setState({
      ToDos: updatedToDos,
      newToDo: {
        todoDesc: ""
      }
    })
  }
  editToDo = (toDoIndex) => {
    this.setState({
      upatingTodoIndex:this.state.upatingTodoIndex?null:toDoIndex+1
    })
  }
  updateToDo = (updatedToDoDesc ,toDoIndex) => {
    let updatedToDos = this.state.ToDos.map((toDo, index) => {
      if (index === toDoIndex) {
        return Object.assign({}, toDo, {
          todoDesc: updatedToDoDesc
        })
      }
      return toDo;
    });
    this.setState({
      ToDos: updatedToDos,
      upatingTodoIndex: null
    })
  }
  deleteToDo = (toDoIndex) => {
    let updatedToDos = this.state.ToDos
    updatedToDos.splice(toDoIndex, 1)
    this.setState({
      ToDos: updatedToDos
    })
  }
  renderToDos = () => {
    let toDoItems = this.state.ToDos;
    if (toDoItems.length > 0) {
      return toDoItems.map((toDo, index) => {
        return (
          <ToDo key={index} toDo={toDo} onChangeToDoStatus={this.onChangeToDoStatus.bind(this,index)} controlActions={{
            deleteToDo: this.deleteToDo.bind(this,index), updateToDo: this.updateToDo.bind(this,index),
            editToDo: this.editToDo.bind(this,index)
          }} isUpdating={index===this.state.upatingTodoIndex-1}/>
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