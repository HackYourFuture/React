import React, { Component } from 'react';
import TodoItems from './todoItems';
import './todoList.css';

class TodoList extends Component {
    render() {
        const todoS = [
            {
                'description': 'Get out of bed',
                'deadline': 'Wed Sep 13 2017'
            },
            {
                'description': 'Brush teeth',
                'deadline': 'Thu Sep 14 2017'
            },
            {
                'description': 'Eat breakfast',
                'deadline': 'Fri Sep 15 2017'
            }
        ];

        const todoItems = todoS.map((task, index) => (
            <TodoItems description={task.description} deadline={task.deadline} />
        ));
        return (
            <div className='todoList'>
                <tr>
                    <th>Task</th>
                    <th>Deadline Date</th>
                </tr>
                {todoItems}
            </div>
        )
    }
}

export default TodoList;
