import React, { Component } from 'react';
import '../App.css';

class Task extends Component {
    render() {
        const { todo } = this.props;
        return (
            <div className='Task'>
                <div style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                    {todo.description}, {todo.deadline}
                </div>
            </div>
        )
    }
}

export default Task;