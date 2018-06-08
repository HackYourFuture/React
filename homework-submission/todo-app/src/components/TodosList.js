import React, { Component } from 'react';
import TodosItem from './TodosItem';
import Todos from './todos.json';
import TodosForm from './TodosForm.js'

import '../App.css';

class TodosList extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    PreSubmit = (id, description, deadline, done) => {
        const stateTodos = this.state.todos;
        const newTodoItem = { id: this.state.todos.length + 1, description: description, deadline: deadline, done: done };
        const newTodos = [...stateTodos, newTodoItem];
        this.setState({
            ...this.state,
            todos: newTodos
        });
    }

    removeTodo(id) {
        this.setState(
            {
                todos: this.state.todos.filter((item) => {
                    return item.id !== id
                })
            }
        )
    }


    toggleDone(id) {
        this.setState(
            {
                todos: this.state.todos.map((item) => {
                    return item.id === id ? { ...item, done: !item.done } : item
                })
            }
        )
    }

    componentDidMount() {
        this.setState({
            todos: Todos
        }
        );
    }


    render() {
        const todoState = this.state.todos;
        const todo = todoState.map((todo) => (
            <TodosItem key={todo.id} todo={todo} toggleDone={this.toggleDone.bind(this)} removeTodo={this.removeTodo.bind(this)} />
        )
        );
        return (
            <div>

                <div>
                    {!(todoState && todoState.length > 0) ? <h1> NO ITEM !!! </h1> : null}
                </div>
                <TodosForm PreSubmit={this.PreSubmit} />
                {todo}

            </div>
        );
    }
};
export default TodosList;