import React, { Component } from 'react';
import TodoItems from './todoItems';
import './todo_main.css'

export default class TodoMain extends Component {
    render() {
        const todos = [
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
        ]

        const main_todos = todos.map((todo, i) => (
            <TodoItems description = { todo.description } deadline = { todo.deadline } />
        )
        );

        return (
            <div>
                 { main_todos }
            </div> 
        )
    } 
}