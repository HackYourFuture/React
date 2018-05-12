import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { description, deadline, id, done } = this.props.todo;
        const { toggleTodo , removeTodo } = this.props;
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
                    <td className="remove"> 
                        <button onClick={() => removeTodo(id)}> REMOVE </button>    
                    </td>
                    </tr> 
            </div>
        )
    }
}