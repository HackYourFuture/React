import React from 'react';
import todoItems from "./todos.json";
import ListItem from "./List-Item";
import TodoInput from "./Todo-Input";


const lastId = todoItems[todoItems.length - 1].id;

export default class Main extends React.Component {

    state = {
        todos: todoItems,
        nextId: lastId + 1
    }

    addTodo = (description, deadline) => {
        const { todos } = this.state;
        const id = this.state.nextId;

        this.setState({
            todos: [...todos, { id, description, deadline, done: false }],
            nextId: id + 1
        });
    }

    removeTodo = todoId => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === todoId);

        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index+1)]
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <section id="wrapper">
                <h2>Todo list</h2>

                <TodoInput addTodo={this.addTodo}/>

                {todos.map(todo => {
                    return <ListItem
                        key={todo.id}
                        todoItem={todo}
                        removeTodo={this.removeTodo} />
                }
                )}
            </section>
        );
    }
}
