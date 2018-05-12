import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    render() {
        const TodoS = [
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

        const TodoItems = TodoS.map((task, index) => (
            <TodoItems description={task.description} deadline={task.deadline} />
        ));
        
        return (<div > {
            TodoItems
        } </div>
          
        )
    }
}



export default TodoList;
