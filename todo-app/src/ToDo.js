import React from 'react'
import TodoDesc from './TodoDesc.js'
import ToDoStatus from './ToDoStatus.js'

export default class TODO extends React.Component {

    render() {
        const { todoDesc, toDoStatus } = this.props.toDo
        return (
            <div className="toDoItem">
                <div>
                    <ToDoStatus toDoStatus={toDoStatus} index={this.props.index} />
                </div>
                <div>
                    <TodoDesc todoDesc={todoDesc} />
                </div>
            </div>
        )
    }
}