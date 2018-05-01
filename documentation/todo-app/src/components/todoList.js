import React, { Component } from 'react';
import TodoItems from './todoItems';
import './todoList.css';

class TodoList extends Component {
    render() {
        const {
            todoS,
            handleToggleCheck
        } = this.props

        return (
            <div className='todoList'>
                <tr>
                    <th>Task</th>
                    <th>Deadline Date</th>
                    <th>Done!</th>
                </tr>
                {todoS.map(todo => (
                    <TodoItems
                        key={todo.id}
                        todo={todo}
                        handleToggleCheck={handleToggleCheck}
                    />
                ))}
            </div>
        )
    }
}

export default TodoList;
