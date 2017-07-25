import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            textValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLocalSubmit = this.handleLocalSubmit.bind(this)
    }
    handleChange(change){
        this.setState({
            textValue:change.target.value,
        }
        )
        console.log(change.target.value)
    }
    handleLocalSubmit(e){
        e.preventDefault()
        this.props.handleNewTaskSubmit(this.state.textValue)
        this.setState({
            textValue: ''
        }
        )
    }

    render(){
        return(
            <form onSubmit={this.handleLocalSubmit}>
                <label htmlFor='addTodo'>Add a new todo</label>
                <input id='addTodo' 
                type='text' 
                onChange={this.handleChange}
                value={this.state.textValue}
                placeholder='Write a description for your todo'
                 />
                <button>Add</button>
            </form>
        )
    }
}

