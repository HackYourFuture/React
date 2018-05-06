import React, { Component } from "react";

class TodoItems extends Component {
    render() {
        const { handleToggleCheck,
        handleRemoveTodo} = this.props
        const {
            description,
            deadline,
            createdAt,
            done,
            id
        } = this.props.todo

        return (
            <tr className='todoItems'>
                <td>{description}</td>
                <td>{deadline}</td>
                <td>{createdAt}</td>
                <td
                    className='done-icon'
                    onClick={() => handleToggleCheck(id)}
                >
                    {done ? <span>✔️</span> : <span>⬜</span>}</td>
                <td 
                    className='remove-icon'
                    onclick={() => 
                handleRemoveTodo(id)}    
                >
                    <span>✖️</span>
                </td>
            </tr>
        )
    }
}

export default TodoItems;
