import React, { Component } from "react"
import {inject , observer} from 'mobx-react'


@inject("values")
@observer
export default class InsertTasks extends Component {

    render() {
        const { ChangeText, ChangeDateField, taskValue, dateValue} = this.props.values
        const { addingNewTask } = this.props

        return (
            <form >
                Enter description:
                    <input
                    type="text"
                    value={taskValue}
                    onChange={ChangeText} /> <br />
                Deadline:
                    <input
                    type="date"
                    value={dateValue}
                    onChange={ChangeDateField} /><br /><br />
                <input
                    type="button"
                    value="add"
                    onClick={() => addingNewTask(taskValue, dateValue)}
                />
            </form>
        )
    }
}