import React, { Component } from 'react';
import '../App.css';

class Task extends Component {
    render() {
        return (
            <div className='Task'>
                <div style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
                    <li>{this.props.description}, {this.props.deadline} </li>
                </div>
                <button
                    onClick={() => this.props.handleRemove(this.props.todo.id)} >
                    Remove
                </button>
            </div>
        )
    }
}

export default Task;
