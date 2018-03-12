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
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
        ));
        this.setState({ todos: todoItems });
    }

    addTodo = (description, deadline) => {
        const todoItems = this.state.todos.map(todo => todo);
        const id = this.state.nextId;
        this.setState({
            todos: [
                ...todoItems,
                { id, description, deadline, done: false }
            ],
            nextId: id + 1,
        });
    }

    toggleEdit = todoId => {
        const todoItems = this.state.todos.map(todo => (
            todo.id === todoId   
            ? { ...todo, update: !todo.update }
            : todo
        ));
        this.setState({ todos: todoItems });   
    }

    saveUpdate = (todoId, newDescription, newDeadline) => {
        const updatedTodos = this.state.todos.map(todo => (
            todo.id === todoId
                ? {
                    ...todo,
                    description: newDescription,
                    deadline: newDeadline,
                    update: !todo.update
                    }
                : todo
        ));
        this.setState({ todos: updatedTodos });
    }

    deleteTodo = todoId => {
        const todoItems = this.state.todos.map(todo => todo);
        const index = todoItems.findIndex(todo => todo.id === todoId);
        this.setState({
            todos: [
                ...todoItems.slice(0, index),
                ...todoItems.slice(index + 1)
            ]
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <section className="wrapper">
                <h2>Todo list</h2>
                <TodoInput addTodo={this.addTodo} />

                { !todos.length
                    ?
                    <p className="empty">
                        There are no items on this list
                    </p>
                    :
                    todos.map(todo => (
                        <ListItem
                            key={todo.id}
                            todoItem={todo}
                            toggleCheck={this.toggleCheck}
                            toggleEdit={this.toggleEdit}
                            saveUpdate={this.saveUpdate}
                            deleteTodo={this.deleteTodo}
                        />
                    ))} 
            </section>
        );
    }
}
