import React from "react";
import { observer, inject } from "mobx-react";
import UpdateTodo from "./UpdateTodo";
import todoItems from "../stores/TodosStore";

@inject("todos")
@observer    
export default class TodoItem extends React.Component {
    state = {
        update: false
    }

    toggleEdit = todoId => {
        const update = !this.state.update;
        this.setState({ update });
    }

    render() {
        const { update } = this.state;

        const { toggleCheck, deleteTodo } = this.props.todoItems;

        const { todo, id, description, deadline, done } = this.props;

        const date = deadline.split("-").join("/");
        const crossOut = done ? "crossOut" : null;
        const listItem = (
            <div className="list-item">
                <input type="checkbox"
                    checked={done}
                    onChange={() => toggleCheck(id)}
                    className="checkbox"
                />
                <label className={crossOut}>
                    {description},   
                    {new Date(date).toDateString()}
                </label>
                <button className="edit-btn"
                    onClick={() => this.toggleEdit(id)}>
                    Edit
                </button>
                <button className="delete-btn"
                    title="delete"
                    onClick={() => deleteTodo(id)}>
                    X
                </button>
            </div>
            );

        const updateTodo = (
            <UpdateTodo todo={todo}
                toggleEdit={this.toggleEdit}
                todoItems={todoItems}
            />
        );

        return (
            <section>
                {update ? updateTodo : listItem}
            </section>
        );
    }
}
