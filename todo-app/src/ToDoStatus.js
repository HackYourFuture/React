import React from 'react'
import './todo.css'

export default class ToDoStatus extends React.Component {

    render() {
        return (
            <div className="toDo-Status">( {this.props.toDoStatus} )</div>
        )

    }
}