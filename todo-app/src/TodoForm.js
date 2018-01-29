import React from "react"
import { inject, observer } from 'mobx-react';
import Moment from 'moment';
import Button from './Button'
import TextField from './TextField'

@inject('todoStore')
@observer

export default class TodoForm extends React.Component {

    state = {
        newTodo: '',
        date: Moment(),
    };

    handleAddTodoClick = () => {
        this.props.ontodoAdd(this.state.newTodo, this.state.date);
        this.setState({ newTodo: '', date: Moment() });
    };

    handleTodoTextChange = event => {
        this.setState({
            newTodo: event.target.value
        })
    };

    render() {
        return (
            <form className='TodoForm'>
                <div>
                    <TextField
                        value={this.state.newTodo}
                        onChange={this.handleTodoTextChange}
                    />
                </div>
                <div>
                    <Button
                        label="Add new todo"
                        onClick={this.handleAddTodoClick}
                        disabled={this.state.newTodo.trim() === ''}
                    />
                </div>
            </form>
        )
    }
}