import React, { Component } from 'react';

class Todo extends Component {
    render() {

        return (
            <li className='todo-item'>{this.props.todo.id}: {this.props.todo.description},
             {this.props.todo.deadline} </li>

        )

    }
}
export default Todo;