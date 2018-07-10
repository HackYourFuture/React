import React, { Component } from 'react';
import '../App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const clickHandler = this.props.clickHandler;
        const removeHandler = this.props.removeHandler;
        const todos = this.props.todos;
        const todoItems = todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} clickHandler={clickHandler} removeHandler={removeHandler} />
        )
        );
        return (
            <ul>
                {todoItems}
            </ul >
        );
    }
}
export default TodoList;
