import React from 'react'

export default class TaskItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            textValue: this.props.task.description

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLocalSubmit = this.handleLocalSubmit.bind(this)
    }
    handleChange(change){
        this.setState({
            textValue:change.target.value
        }
        )
    }
    handleLocalSubmit(e){
        e.preventDefault()
        this.props.handleSubmit(this.state.textValue)
    }
    render(){
        const {index, task} = this.props
        return(
            <form onSubmit={this.handleLocalSubmit}>
            <input id='completed' 
            type='checkbox' 
            defaultChecked={task.done} 
            onClick={() => this.props.handleCompletedTask(task.id)} 
            />
            <label>{index + 1}</label>
            <input id='task' 
                    type='text' 
                    required
                    defaultValue={task.description}
                    onChange={this.handleChange}
                    
                    />   
            <button type='button' onClick={() => this.props.handleDelete(task.id)}>Delete</button>
            </form> 
        )
    }
}