import React from 'react'
import './todo.css'

export default class TodoDesc extends React.Component {
    constructor(props) {
        super(props)
    }
    editTodo = (event) => {
        this.props.controlActions.editToDo(this.props.index)
    }
    updateTodo = (event) => {
        this.props.controlActions.updateToDo(this.props.index)
    }
    deleteTodo = (event) => {
        this.props.controlActions.deleteToDo(this.props.index)
    }
    handleInputChange(event) {

    }
    render() {
        return (
            <div className="toDo-Description">
                <dev  >
                    <input type="text" name="username" value={this.props.todoDesc} onChange={this.handleInputChange} />
                </dev>
                <div><a href="#" className="editToDo" name="Edit" onClick={this.editTodo} >{this.props.toDoControl.edit}</a></div>
                <div><a style={{ display: this.props.toDoControl.update }} href="#" className="updateToDo" name="Update" onClick={this.updateTodo} >Update</a></div>
                <div><a href="#" className="deleteToDo" name="Delete" onClick={this.deleteTodo} >Delete</a></div>
            </div>
        )
    }
}