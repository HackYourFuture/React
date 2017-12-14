import React, { Component } from 'react';
import TodoDescription from './TodoDescription'
import TodoState from './TodoState'

class TodoItems extends Component {

    constructor(props) {
        super(props)

        this.TodoStatus = this.TodoStatus.bind(this)
        this.delete = this.delete.bind(this)
    }

    TodoStatus(todoStage, todoID) {
        this.props.onChange(todoStage, todoID);
    }

    delete() {
        let selectedTodo = this.props.todo.id
        this.props.delete(selectedTodo)
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <TodoState
                            todo={this.props.todo}
                            status={this.props.todo.status}
                            onChange={this.TodoStatus}
                        />
                        <TodoDescription
                            description={this.props.todo.description}
                            edit={this.props.edit}
                            onEditOn={this.props.onEditOn}
                            onEditOff={this.props.onEditOff}
                            onUpdate={this.props.onUpdateDescription}
                        />
                        <button onClick={this.delete}> Delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default TodoItems
