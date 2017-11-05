import React from 'react'
import './todo.css'

export default class TodoDesc extends React.Component {
    editTodo(event) {

    }
    deleteTodo(event) {

    }
    updateTodo(event) {

    }
    handleInputChange(event) {

    }
    render() {
        return (
            <div className="toDo-Description">

                <div><a href="#" name ="Edit" onChange={this.editTodo} >Edit</a></div>
                <div><a href="#" name ="Update" onChange={this.updateTodo} >Update</a></div>
                <div><a href="#" name ="Delete" onChange={this.deleteTodo} controlActions={{
            deleteToDO: this.deleteToDO, updateToDO: this.updateToDO,
            editToDO: this.editToDO
          }}>Delete</a></div>
                <a href="#" onclick={document.getElementById('formAddToDo').submit()}>Submit!</a>
            </div>
        )
    }
}