import React, { Component } from 'react'

export default class Tasks extends Component {
    setDate(date) {
        const time = new Date(date);
        return time.toDateString()
    }

    render() {
         
        const todo = this.props.todo;
        const taskTime = this.setDate(this.props.taskTime)
        return (
            <li>{todo} on {taskTime} </li>
        )
    }
}