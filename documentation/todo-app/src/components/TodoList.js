import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../todo_list.css';
import Todos from './todos.json';
import CommentForm from './CommentForm.js'

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos : []
        }
    }
    handleSubmit=(description, deadline) =>{
        const currentTodos = this.state.todos;
        const newTodo = { description: description , deadline: deadline };
        const newTodos = [...currentTodos, newTodo];
        this.setState({
            ...this.state,
            todos: newTodos
        });
    }
    removeTodo(id) {
        this.setState(
            {
                todos: this.state.todos.filter((todo) => {
                     return todo.id !== id 
                })
            }
        )  
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
            <TodoItem todo={todo}
                toggleTodo={this.toggleTodo.bind(this)}
                removeTodo={this.removeTodo.bind(this)}
            />
        )
        );   
        return (
            <div>
               
                <div>
                    {!(temp && temp.length > 0) ?
                        <h2>NO ITEM...</h2>
                        : null}
                </div>
                <CommentForm handleSubmit={this.handleSubmit} />
                 {main_todos}
            </div>
        );
    } 
    componentDidMount() {
        this.setState({
            todos: Todos
        }
        );
    }
}