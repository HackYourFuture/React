import React from "react";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";


export default class ListItem extends React.Component {

    state = {
        update: false
    }

    modifyTodo = action => {
        const { id } = this.props.todoItem;
        this.props[action](id);
    }

    toggleEdit = () => {
        const update = !this.state.update;
        this.setState({ update });
    }

    saveUpdate = (newDescription, newDeadline) => {
        const { id } = this.props.todoItem;
        const { saveUpdate } = this.props;
        saveUpdate(id, newDescription, newDeadline);
    }

    render() {
        const { update } = this.state;
        const {
            description,
            deadline,
            done
        } = this.props.todoItem;

        const date = deadline.split("-").join("/");
        const crossOut = done ? "crossOut" : null;

        const updateTodo = (
            <UpdateTodo saveUpdate={this.saveUpdate}
                cancelUpdate={this.toggleEdit}
                description={description}
                deadline={deadline}
            />
        );
        const todoItem = (
            <div>
                <input type="checkbox"
                    checked={done}
                    onChange={() => this.modifyTodo("toggleCheck")}
                    className="checkbox"
                />
                <label className={crossOut}>
                    {description}, 
                    {new Date(date).toDateString()}
                </label>
                <button className="edit-btn"
                    onClick={this.toggleEdit}>
                    Edit
                </button>
                <button className="delete-btn"
                    title="delete"
                    onClick={() => this.modifyTodo("deleteTodo")}>
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
