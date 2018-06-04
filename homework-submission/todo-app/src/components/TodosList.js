import React, { Component } from 'react';
import TodosItem from './TodosItem';
import Todos from './todos.json';
import '../App.css';

class TodosList extends Component {
    constructor() {
        super();
        this.state = {
            todos: Todos
        }
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
    render() {
        const todoState = this.state.todos;
        const todo = todoState.map((todo) => (
            <TodosItem key={todo.id} todo={todo} toggleDone={this.toggleDone.bind(this)} />
        )
        );
        return (
            <div>
                {todo}
                <div className="comment">
                    {!(todoState && todoState.length > 0) ? <h1> NO ITEM !!! </h1> : null}
                </div>
            </div>
        )
    }
};
export default TodosList;