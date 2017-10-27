import React from 'react'
import './todo.css'

export default class TodoDesc extends React.Component {
    render() {
        return (
            <dev className="toDo-Description" >* {this.props.todoDesc}</dev>
        )
    }
}