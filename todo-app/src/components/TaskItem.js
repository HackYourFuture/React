import React, { Component } from "react";
import PropTypes from "prop-types"

import "../style.css"
import Trash from "react-icons/lib/fa/trash"
import Edit from "react-icons/lib/fa/edit"


export default class TaskItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        description: PropTypes.string,
        deadLine: PropTypes.string,
        done: PropTypes.bool,
        creatingDate: PropTypes.string
    }
    handleChange = () => {
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
        const checkBox = <input type="checkBox" checked={this.props.isDone} onChange={this.handleChange} />
        return (
            <div className="tasks">    
                <li>
                    <div>
                        Description : {description}
                        <br />
                        <br />
                        Dead Line : {deadLine}
                        <br />
                        {this.props.isDone ? "is Done" : "not done yet"} {checkBox}
                   </div>
                </li>
                <div className="tools">
                    <button className="remove-button" onClick={this.handleRemoving}><Trash /></button>
                    <button className="edit-button" onClick={this.handleEditing}><Edit /></button>
                </div>
                <div className="timestamp">
                    <span>Created at: {this.props.creatingDate}</span>     
                </div>    

            </div>
        )
    }
}

