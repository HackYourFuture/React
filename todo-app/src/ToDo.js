import React from 'react'
import TodoDesc from './TodoDesc.js'
import ToDoStatus from './ToDoStatus.js'
import './todo.css'


export default class TODO extends React.Component {
    render() {
        const { todoDesc, toDoStatus } = this.props.toDo
        return (
            <div className="toDoItem">
                <div>
                    <TodoDesc todoDesc={todoDesc} />
                </div>
                <div>
                    <ToDoStatus toDoStatus={toDoStatus} />
                </div>
            </div>
        )

    }


}