import React, { Component } from 'react';

const defaultState = {
    description: '',
}

export default class AddTodoForm extends Component{

    state = defaultState

    createTask = () => {
        this.props.createTodoTask(this.state);
        this.setState(defaultState);
    }

    handleFieldChange = (event, field) => {
        this.setState({ [field]: event.target.value })
    }
    render() {
 
        return (
            <div className='AddTodoForm'>
                <input
                    placeholder=' Task '
                    type='text'
                    value={this.state.description}
                    onChange={(e) => this.handleFieldChange(e,'description')}
                >
                </input>

                <input
                    placeholder=' Deadline'
                    type='dateTime-local'
                    value={this.state.deadline}
                    onChange={(e) => this.handleFieldChange(e, 'deadline')}
                >
                </input>

                <button
                    onClick={this.createTask}> Add 
                    </button>                
            </div>    
        )
    }
}