import React from 'react';
import TextField from './TextField';
import Button from './button';


export default class TodoForm extends React.Component {

    state = {
        todoText: '',
        deadline: '',
    };

    handleAddTodoClick = () => {
        this.props.onTodoAdd(this.state.todoText, this.state.deadline);
        this.setState({todoText: '',deadline: ''});
    };

    handleTodoTextChange = event => {
        this.setState({
            todoText: event.target.value,
        });
    };

    handleDeadlineChange = event => {
        this.setState({
            deadline: event.target.value,
        });
    };

    render() {
        return (
            <form className='TodoForm'>
                <div>
                    <TextField multiline
                    value={this.state.todoText}
                    onChange={this.handleTodoTextChange}/>
                </div>
                <div>
                    <span className="deadline-form-title">Enter deadline here</span>
                    <TextField className="deadline-input"
                    value={this.state.deadline}
                    onChange={this.handleDeadlineChange}/>
                </div>
                <div className='TodoForm-Buttons'>
                    <Button label="Add Todo"
                     onClick={this.handleAddTodoClick}
                     disabled={this.state.todoText.trim() === ''}/>
                </div>
            </form>
        )
    }
}