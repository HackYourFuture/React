import React from 'react';
import {inject, observer} from 'mobx-react';
import TextField from './TextField';
import Button from './button';

@inject('todos')@observer
export default class TodoForm extends React.Component {

    state = {
        todoText: '',
        deadline: '',
    };

    handleAddTodoClick = () => {
        this.props.todos.addTodo(this.state.todoText, this.state.deadline);
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
                    <span className="deadline-form-title">please Enter Todo here</span>
                    <TextField multiline
                    value={this.state.todoText}
                    onChange={this.handleTodoTextChange}/>
                </div>

                <div>
                    <span className="deadline-form-title">please Enter deadline here</span>
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
        );
    };
};