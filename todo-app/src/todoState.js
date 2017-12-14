import React from 'react'

class TodoState extends React.Component {
    constructor(props) {
        super(props);

        this.handleTodoStatus = this.handleTodoStatus.bind(this);
    }

    handleTodoStatus(event) {
        const todoStatus = event.target.checked
        const todoID = this.props.todo.id
        this.props.onChange(todoStatus, todoID)
    }

    todoStatus() {
        let status = 'Not Done'
        if (this.props.todo.status) { status = 'Done' }
        return status
    }

    render() {
        return (
                <div>
                    <input
                        type="checkbox"
                        checked={this.props.todo.status}
                        onChange={this.handleTodoStatus}>
                    </input>
                    <label>
                        {this.todoStatus()}
                    </label>
                </div>
        )
    }
}
export default TodoState