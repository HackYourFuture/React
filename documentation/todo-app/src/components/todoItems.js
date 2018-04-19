import React, { Component } from "react";

class TodoItems extends Component {
    render() {
        const description = this.props.description;
        const deadline = this.props.deadline;
        return (
            <tr className='todoItems'>
                <td>{description}</td>
                <td>{deadline}</td>
            </tr>
        )
    }
}

export default TodoItems;
