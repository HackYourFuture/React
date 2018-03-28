import React, { Component } from "react";
import PropTypes from "prop-types"
import { inject, observer } from "mobx-react"

import Trash from "react-icons/lib/fa/trash"
import Edit from "react-icons/lib/fa/edit"

import moment from "moment"



@inject("todosStore")
@observer
export default class TaskItem extends Component {

    static propTypes = {
        _id: PropTypes.number,
        description: PropTypes.string,
        deadline: PropTypes.string,
        done: PropTypes.bool,

    }

    togglingDone = () => {
        this.props.todosStore.toggleDone(this.props.taskId)
    }

    removeTodo = () => {
        this.props.todosStore.removeTodo(this.props.taskId)
    }

    render() {
        const {
            onChangeDeadlineTime,
            editingDescriptionText,
            editingDeadlineTime,
            saveEdited,
            cancelEditing,
            onChangeDescriptionText,
            enableEditMode,
            taskEditingId } = this.props.todosStore

        const description = this.props.description;
        const deadline = this.props.deadline

        const checkBox = <input type="checkBox" checked={this.props.isDone} onChange={this.togglingDone} />


        const editTextMode = () => {
            return (
                <textarea value={editingDescriptionText} rows="3" cols="20" onChange={e => onChangeDescriptionText(e.target.value)} />
            )
        }
        const editDeadlineMode = () => {
            return (
                <React.Fragment>
                    <input type="date" className="edit-date-input" value={editingDeadlineTime} onChange={e => onChangeDeadlineTime(e.target.value)} />
                    <button className="save-button" onClick={() => saveEdited(this.props.taskId)}>
                        Save
                    </button>
                    <button className="cancel-editing-button" onClick={() => cancelEditing()}>
                        Cancel
                    </button>
                </React.Fragment>
            )
        }

        return (
            <div className="tasks">
                <li>
                    <div>
                        {taskEditingId === this.props.taskId ? editTextMode() : description}
                        <br />
                        <br />
                        {taskEditingId === this.props.taskId ? editDeadlineMode() : moment(deadline).format("ddd, D MMM, YYYY")}
                        <br />
                        {this.props.isDone ? "is Done" : "not done yet"} {checkBox}
                    </div>
                </li>
                <div className="tools">
                    <button className="remove-button" onClick={this.removeTodo}><Trash /></button>
                    <button className="edit-button" onClick={() => enableEditMode(this.props.taskId)}><Edit /></button>
                </div>


            </div>
        )
    }
}

