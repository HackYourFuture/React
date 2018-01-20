import React from 'react';
import TextField from './TextField';
import Button from './button';

export default class TodoForm extends React.Component {

    state = {
        todoText: ''
    }

    handleAddTodoClick = () => {
        this.props.onTodoAdd(this.state.todoText);
        this.setState({todoText: ''})
    };

    handleTodoTextChange = event => {
        this.setState({
            todoText: event.target.value
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
                <div className='TodoForm-Buttons'>
                    <Button label="Add Todo"
                     onClick={this.handleAddTodoClick}
                     disabled={this.state.todoText.trim() === ''}/>
                </div>
            </form>
        )
    }
}