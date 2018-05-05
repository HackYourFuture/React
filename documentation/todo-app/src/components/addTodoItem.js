import React from 'react';

const defaultState = {
    description: '',
    deadline: '',
    done: false
}

export default class AddTodoItem extends React.Component {
    state = defaultState

    handleFieldChange = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    addTodo = () => {
        this.props.handleAddTodo(this.state)
        this.setState(defaultState)
    }

    render() {

        const { handleAddTodo } = this.props
        const {
            description,
            deadline
        } = this.state

        return (
            <div className='add-todo-form'>
                <input 
                    type='text'
                    placeholder='task'
                    value={this.state.description}
                    onChange={(e) => this.handleFieldChange(e, 'description')}
                />
                <input 
                    type='text'
                    placeholder='deadline'
                    value={this.state.deadline}
                    onChange={(e) => this.handleFieldChange(e, 'deadline')}
                />
            <button onClick={this.addTodo}>Add task</button>    
            </div>
        )
    }
}