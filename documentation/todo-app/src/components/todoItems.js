import React, { Component } from "react";

class TodoItems extends Component {
    render() {
        const { handleToggleCheck } = this.props
        const {
            description,
            deadline,
            done,
            id
        } = this.props.todo

        return (
            <tr className='todoItems'>
                <td>{description}</td>
                <td>{deadline}</td>
                <td
                    className='done-icon'
                    onClick={() => handleToggleCheck(id)}
                >
                    {done ? <span>✔️</span> : <span>⬜</span>}</td>
            </tr>
        )
    }
}

export default TodoItems;
