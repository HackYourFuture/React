import React, { Component } from 'react'

export default class Todos extends Component {
    setDate(date) {
        const time = new Date(date);
        return time.toDateString()
    }

    render() {

        const todo = this.props.todo;
        const todoTime = this.setDate(this.props.todoTime)
        return (
            <li>{todo} on {todoTime} </li>
        )
    }
}