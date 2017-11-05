import React from 'react'
import TodoDesc from './TodoDesc.js'
import ToDoStatus from './ToDoStatus.js'

export default class TODO extends React.Component {

    render() {
        const { todoDesc, isDone ,toDoControl } = this.props.toDo
        return (
            <div className="toDoItem">
                <div>
                    <ToDoStatus isDone={isDone} index={this.props.index} onChange={this.props.onChange}/>
                </div>
                <div>
                    <TodoDesc todoDesc={todoDesc} index={this.props.index} toDoControl={toDoControl} onChange={this.props.onChange} controlActions={this.props.controlActions} editToDO= {this.props.editToDO}
/>
                </div>
            </div>
        )
    }
}