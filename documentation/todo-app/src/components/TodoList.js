import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../todo_list.css';
import Todos from './todos.json';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos : Todos
        }
    }
    toggleTodo(id) {
        this.setState(
            {
                todos: this.state.todos.map((todo) => {
                    return todo.id === id ? {...todo, done: !todo.done} : todo
                })
            }
        )
    }
    render() {
        const temp = this.state.todos;
        const main_todos = temp.map((todo, i) => (
            <TodoItem todo={todo} toggleTodo={this.toggleTodo.bind(this)} />
        )
        );   
        return (
            <div>
                {main_todos}
                <div>
                    { !(temp && temp.length > 0)  ?
                        <h2>NO ITEM...</h2>
                        : null}
                </div>
            </div>
        )
    } 
}