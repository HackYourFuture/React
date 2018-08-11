import React, { Component } from 'react';

class Todo extends Component {
    render() {

        return (
            <div className='todo-item'>
                <h1>Todo # : {this.props.todo.id}</h1>
                <h2> What to do :{this.props.todo.description} </h2>
                <h2> Do it before: {this.props.todo.deadline}</h2>
            </div>

        )

    }
}
export default Todo;