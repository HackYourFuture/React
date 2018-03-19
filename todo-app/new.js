import React from "react";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";


class ListItem extends React.Component {

    // handleCheck = () => {
    //     const { id } = this.props.todoItem;
    //     this.props.checked(id);
    // }

    // handleEditTodo = () => {
    //     const { id } = this.props.todoItem;
    //     this.props.editTodo(id);
    // }

    handleModifyTodo(action, id) {
        const { id } = this.props.todoItem;
        this.props.action(id);
    }
    handleSaveUpdate = (newDescription, newDeadline) => {
        const { id } = this.props.todoItem;
        this.props.saveUpdate(id, newDescription, newDeadline);
    }

    // handleCancelUpdate = () => {
    //     const { id } = this.props.todoItem;
    //     this.props.cancelUpdate(id);
    // }

    // handleDeleteTodo = () => {
    //     const { id } = this.props.todoItem;
    //     this.props.deleteTodo(id);
    // }

    render() {
        const { description, deadline, done, update } = this.props.todoItem;
        const crossOut = done ? "crossOut" : null;

        return (
            <div>
                {update ? <UpdateTodo saveUpdate={this.handleSaveUpdate}
                    cancelUpdate={this.handleCancelUpdate}
                    todoItem={this.props.todoItem} />
                    : <div>
                        <input type="checkbox"
                            checked={done}
                            onChange={this.handleCheck}
                            className="checkbox" />
                        <label className={crossOut}>
                            {description}, {new Date(deadline).toDateString()}
                        </label>
                        <button onClick={this.handleEditTodo} className="edit-btn">Edit</button>
                        <button onClick={this.handleDeleteTodo} className="delete-btn">X</button>
                    </div>
                }

            </div>
        );
    }

}


ListItem.propTypes = {
    todoItem: PropTypes.object.isRequired
};


