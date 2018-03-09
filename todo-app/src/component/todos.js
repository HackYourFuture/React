import React from "react";
import dbTodos from '../todo.json';
import TodoList from './todoList';

export default class Todos extends React.Component {
    state = {
        todos: dbTodos,
    }
    handelCheck = (index) => {
        const todos = this.state.todos;
        todos[index].done = !todos[index].done;
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="todosContainer">
                <h3>Todo-List</h3>
                <TodoList todos={this.state.todos}
                    handelCheck={this.handelCheck}
                />
                <div className="isCompleted" >
                    <span>
                        Completed tasks:
                    </span>
                    <em>
                        {this.state.todos.filter((todo) => { return todo.done }).length}
                    </em>
                </div>
                <div className="isCompleted">
                    <span> Uncompleted tasks :</span>
                    <em>
                        {this.state.todos.filter((todo) => { return !todo.done }).length}
                    </em>
                </div>
            </div>

        );
    }
}
