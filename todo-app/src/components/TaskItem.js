import React, { Component } from "react";
import PropTypes from "prop-types"
import { inject, observer } from "mobx-react"

import Trash from "react-icons/lib/fa/trash"
import Edit from "react-icons/lib/fa/edit"

@inject("todosStore")
@observer
export default class TaskItem extends Component {

    static propTypes = {
        id: PropTypes.number,
        description: PropTypes.string,
        deadLine: PropTypes.string,
        done: PropTypes.bool,
        creatingDate: PropTypes.string
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
            saveEdited,
            onChangeDescriptionText,
            enableEditMode,
            taskEditingId } = this.props.todosStore

        const description = this.props.description;
        const deadLine = this.props.deadLine

        const checkBox = <input type="checkBox" checked={this.props.isDone} onChange={this.togglingDone} />


        const editTextMode = () => {
            return (
                <div>
                    <textarea value={editingDescriptionText} rows="3" cols="20" onChange={e => onChangeDescriptionText(e)} />
                    <button className="save-button" onClick={() => saveEdited(this.props.taskId)}>
                        Save
                    </button>
                </div>
            )
        }
        const editDeadlineMode = () => {
            return (
                <input type="date" className="edit-date-input" onChange={e => onChangeDeadlineTime(e)}/>
            )
        }

        return (
            <div className="tasks">
                <li>
                    <div>
                        { taskEditingId === this.props.taskId ? editTextMode() : description}
                        <br />
                        <br />
                        {taskEditingId === this.props.taskId ? editDeadlineMode() : deadLine}
                        <br />
                        {this.props.isDone ? "is Done" : "not done yet"} {checkBox}
                    </div>
                </li>
                <div className="tools">
                    <button className="remove-button" onClick={this.removeTodo}><Trash /></button>
                    <button className="edit-button" onClick={() => enableEditMode(this.props.taskId)}><Edit /></button>
                </div>
                <div className="timestamp">
                    <span>Created at: {this.props.creatingDate}</span>
                </div>

            </div>
        )
    }
}

