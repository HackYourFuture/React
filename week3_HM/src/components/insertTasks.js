import React, { Component } from "react"
//const data = require('../todo.json')


export default class InsertTasks extends Component {

    state = {
        taskValue: '',
        dateValue: ''
    }

    handleTextChange = (event) => {
        this.setState({
            taskValue: event.target.value,
        })
        console.log(event.target.value)
    }
    handleDateFieldChange = (event) => {
        this.setState({
            dateValue: event.target.value,
        })
        console.log(event.target.value)
    }

    render() {
        const { handleAddingNewTask } = this.props

        return (
            <form >
                Enter description:
                    <input
                    type="text"
                    value={this.state.taskValue}
                    onChange={this.handleTextChange} /> <br />
                Deadline:
                    <input
                    type="date"
                    value={this.state.dateValue}
                    onChange={this.handleDateFieldChange} /><br /><br />
                <input
                    type="button"
                    value="add"
                    onClick={() => handleAddingNewTask(this.state.taskValue, this.state.dateValue)}
                />
            </form>
        )
    }
}