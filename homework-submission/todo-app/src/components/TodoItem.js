import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoItems extends Component {

    render() {

        const items = [
            {
                task: 'Get out of bed',
                date: 'Wed Sep 13 2017'
            }, {
                task: 'Brush teeth',
                date: 'Thu Sep 14 2017'
            }, {
                task: 'Eat breakfast',
                date: 'Fri Sep 15 2017'
            }
        ];
        const TodoListItem = items.map((element) => (
            <TodoList todoTask={element.task} taskDate={element.date
            } />
        ));

        return (<div>
            {TodoListItem}

        </div>);
    }
}
export default TodoItems;