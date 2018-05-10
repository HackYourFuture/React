import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { description, deadline, id, done } = this.props.todo;
        const { toggleTodo } = this.props;
        return (
            <div> 
                    <tr>
                        <td>
                        <input
                            onClick={() => toggleTodo(id)}
                            type="checkbox" />
                        </td>
                    <td className="description" style={done ? { textDecoration: 'line-through'} : {}}>
                           { description }
                        </td>
                    <td className="deadline" style={done ? { textDecoration: 'line-through' } : {}}>
                           { deadline }
                        </td>
                    </tr> 
            </div>
        )
    }
}