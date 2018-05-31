import React, { Component } from 'react';
import TodoList from './TodoList';
const uuid = require('uuid/v4');

class TodoItems extends Component {

    render() {

        const items = [
            {
                'id': uuid(),
                'task': 'Get out of bed',
                'date': 'Wed Sep 13 2017'
            }, {
                'id': uuid(),
                'task': 'Brush teeth',
                'date': 'Thu Sep 14 2017'
            }, {
                'id': uuid(),
                'task': 'Eat breakfast',
                'date': 'Fri Sep 15 2017'
            }
        ];

        const TodoListItem = items.map((element) => (
            <TodoList key={element.id} todoTask={element.task} taskDate={element.date
            } />
        ));


        return (
            <div>
                {TodoListItem}

            </div>
        );
    }
}
export default TodoItems;