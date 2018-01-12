import React from "react"
import Button from './Button'
import TextField from './TextField'

export default class TaskForm extends React.Component{
    
    state = {
        newTodo : ''
    };
    
    handleAddTodoClick = () => {
      this.props.ontodoAdd(this.state.newTodo);
      this.setState({newTodo : ''});
    };

    handleTodoTextChange = event=> {
       this.setState({
           newTodo: event.target.value
       })
    };

    render() {
        return (
            <form className='TodoForm'>
                <div>
                  <TextField 
                   value = {this.state.newTodo}
                   onChange={this.handleTodoTextChange}
                   />
                </div>
                <div>
                <Button 
                label="Add new todo" 
                 onClick={this.handleAddTodoClick}
                 disabled = {this.state.newTodo.trim() === ''}
                 />
                </div>
            </form>
        )
    }
}