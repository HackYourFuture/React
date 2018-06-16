import React, { Component } from 'react';
import Todos from './todos.json';
import '../App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: Todos
        }
    }
    clickNotHandler = (event) => {
        const changedId = event.target.id;
        const todos = this.state.todos;
        const index = todos.findIndex(todo => todo.id.toString() === changedId.toString());
        todos[index].done = !todos[index].done;
        this.setState({ todos: todos });
    }
    render() {
        const todos = this.state.todos;
        const todoItems = todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} clickHandler={this.clickNotHandler} />
        )
        );
        return (
            <ul>
                {todoItems}
            </ul >
        )
    }
};
export default TodoList;