import React from 'react';
import todoItems from "./todos.json";
import ListItem from "./ListItem";
import TodoInput from "./TodoInput";

const todoIDs = todoItems.map(todo => todo.id);

export default class Main extends React.Component {

    state = {
        todos: todoItems,
        nextId: Math.max(...todoIDs) + 1
    }

    toggleCheck = todoId => {
        const todoItems = this.state.todos.map(todo => (
            todo.id === todoId
                ? { ...todo, done: !todo.done }
                : todo
        ));
        this.setState({ todos: todoItems });
    }

    addTodo = (description, deadline) => {
        const todoItems = [...this.state.todos];
        const id = this.state.nextId;
        this.setState({
            todos: [
                ...todoItems,
                { id, description, deadline, done: false }
            ],
            nextId: id + 1,
        });
    }

    saveUpdate = (todoId, newDescription, newDeadline) => {
        const updatedTodos = this.state.todos.map(todo => (
            todo.id === todoId
                ? {
                    ...todo,
                    description: newDescription,
                    deadline: newDeadline,
                    }
                : todo
        ));
        this.setState({ todos: updatedTodos });
    }

    deleteTodo = todoId => {
        const todoItems = [...this.state.todos];
        const index = todoItems.findIndex(todo => (
            todo.id === todoId
        ));
        this.setState({
            todos: [
                ...todoItems.slice(0, index),
                ...todoItems.slice(index + 1)
            ]
        });
    }

    render() {
        const { todos } = this.state;
        const emptyList = (
            <p className="empty">
                There are no items on this list
            </p>
        );
        const listItem = (todos.map(todo => (
            <ListItem
                key={todo.id}
                todoItem={todo}
                toggleCheck={this.toggleCheck}
                saveUpdate={this.saveUpdate}
                deleteTodo={this.deleteTodo}
            />
        )));

        return (
            <section className="wrapper">
                <h2>Todo list</h2>
                <TodoInput addTodo={this.addTodo} />
                { todos.length ? listItem : emptyList } 
            </section>
        );
    }
}
