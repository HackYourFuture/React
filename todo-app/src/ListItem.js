import React from "react";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";


export default class ListItem extends React.Component {

    handleModifyTodo = action => {
        const { id } = this.props.todoItem;
        this.props[action](id);
    }

    handleSaveUpdate = (newDescription, newDeadline) => {
        const { id } = this.props.todoItem;
        const { saveUpdate } = this.props;
        saveUpdate(id, newDescription, newDeadline);
    }

    render() {
        const {
            description,
            deadline,
            done,
            update
        } = this.props.todoItem;

        const date = deadline.split("-").join("/");
        const crossOut = done ? "crossOut" : null;

        const updateTodo = (
            <UpdateTodo saveUpdate={this.handleSaveUpdate}
                cancelUpdate={() => {
                    this.handleModifyTodo("toggleEdit")
                }}
                description={this.props.todoItem.description} />
        );

        const todoItem = (
            <div>
                <input type="checkbox"
                    checked={done}
                    onChange={() => {
                        this.handleModifyTodo("toggleCheck")
                    }}
                    className="checkbox" />

                <label className={crossOut}>
                    {description}, 
                    {new Date(date).toDateString()}
                </label>

                <button className="edit-btn"
                    onClick={() => {
                    this.handleModifyTodo("toggleEdit")
                    }}>
                    Edit
                </button>

                <button className="delete-btn" title="delete"
                    onClick={() => {
                        this.handleModifyTodo("deleteTodo")
                    }}>
                    X
                </button>
            </div>
        );

        return (
            <section>
                { update ? updateTodo : todoItem }
            </section>   
        );
    }
}


ListItem.propTypes = {
    todoItem: PropTypes.object.isRequired
};
