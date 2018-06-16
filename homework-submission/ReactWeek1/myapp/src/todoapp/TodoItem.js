import React, { Component } from 'react';
import '../App.css';

class TodoItem extends Component {
    render() {
        const { id, description, deadline, done } = this.props.todo;
        const { clickHandler } = this.props;
        return (
            < li className={done ? "done" : "un-done"} >
                <input type="checkbox" id={id} name="Todo" onChange={clickHandler} checked={done} />
                <label htmlFor="Todo">{description}</label>
                <p>{deadline}</p>
            </li >
        )
    }
};
export default TodoItem;