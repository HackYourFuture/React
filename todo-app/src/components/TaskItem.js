import React, { Component } from "react";
import "../style.css"
import PropTypes from "prop-types"
import Trash from "react-icons/lib/fa/trash"
import Edit from "react-icons/lib/fa/edit"
import moment from "moment"


export default class TaskItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        description: PropTypes.string,
        deadLine: PropTypes.string,
        done: PropTypes.bool
    }
    
    state = {
        isDone: false,
        creatingDate: moment().format('llll')
    }
    handleChange = () => {
        this.setState(prevState => ({
            isDone: !prevState.isDone
        }))
        this.props.handleCheckingBox(this.props.taskId)
    }
    handleRemoving = () => {
        this.props.onRemove(this.props.taskId)
    }
    handleEditing = () => {
        const descriptionPrompt = prompt("Enter the new Description", this.props.description)
        if (descriptionPrompt) {
            this.props.onEdit(this.props.taskId, descriptionPrompt)
        } else {
            alert("you should enter some text")
        }
        
    }
    render() {
        const description = this.props.description;
        const deadLine = this.props.deadLine
        const checkBox = <input type="checkBox" value={this.state.isDone} onChange={this.handleChange} />
        return (
            <div className="tasks">    
                <li>
                    <div>
                        Description : {description}
                        <br />
                        <br />
                        Dead Line : {deadLine}
                        <br />
                       {checkBox}  {this.state.isDone ? "is Done" : "not done yet"}
                   </div>
                </li>
                <div className="tools">
                    <button className="remove-button" onClick={this.handleRemoving}><Trash /></button>
                    <button className="edit-button" onClick={this.handleEditing}><Edit /></button>
                </div>
                <div className="timestamp">
                    <span>Created at: {this.state.creatingDate}</span>     
                </div>    

            </div>
        )
    }
}

