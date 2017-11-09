import React from 'react'
import './todo.css'

export default class TodoDesc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedToDoDesc: this.props.todoDesc
        }
    }
    handleInputChange = (event) => {
        this.setState({
            updatedToDoDesc: event.target.value
        })
    }
    render = () => {
        let readOnlyOPT = {
            'readOnly': this.props.isUpdating ? "" : "readOnly"
        }
        return (
            <div className="toDo-Description">
                <dev  >
                    <input type="text" name="username" value={this.state.updatedToDoDesc} onChange={this.handleInputChange} {...readOnlyOPT} />
                </dev>
                <div><a href="#" className="editToDo" name="Edit" onClick={this.props.controlActions.editToDo} >{this.props.isUpdating ? "Cancel" : "Edit"}</a></div>
                <div><a style={{ display: this.props.isUpdating ? "block" : "none" }} href="#" className="updateToDo" name="Update" onClick={() => { this.props.controlActions.updateToDo(this.state.updatedToDoDesc) }}>Update</a></div>
                <div><a href="#" className="deleteToDo" name="Delete" onClick={this.props.controlActions.deleteToDo} >Delete</a></div>
            </div>
        )
    }
}