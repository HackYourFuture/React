import React from 'react'
import TodoDesc from './TodoDesc.js'
import ToDoStatus from './ToDoStatus.js'

export default class TODO extends React.Component {

    render() {
        const { todoDesc, isDone} = this.props.toDo
        return (
            <div className="toDoItem">
                <div>
                    <ToDoStatus isDone={isDone} onChangeStatus={this.props.onChangeToDoStatus}/>
                </div>
                <div>
                    <TodoDesc todoDesc={todoDesc} isUpdating={this.props.isUpdating} controlActions={this.props.controlActions}/>
                </div>
            </div>
        )
    }
}