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
        this.props.saveUpdate(id, newDescription, newDeadline);
    }

    render() {
        const { description, deadline, done, update } = this.props.todoItem;
        const crossOut = done ? "crossOut" : null;
        return (
            <section>
                { update
                    ?
                    <UpdateTodo saveUpdate={this.handleSaveUpdate}
                        cancelUpdate={() => this.handleModifyTodo("toggleEdit")} />
                    :
                    <div>
                        <input type="checkbox"
                            checked={done}
                            onChange={() => this.handleModifyTodo("toggleCheck")}
                            className="checkbox" />

                        <label className={crossOut}>
                            {description}, {new Date(deadline).toDateString()}
                        </label>

                        <button onClick={() => this.handleModifyTodo("toggleEdit")}
                            className="edit-btn">
                            Edit
                        </button>

                        <button onClick={() => this.handleModifyTodo("deleteTodo")}
                            className="delete-btn" title="delete"> 
                            X
                        </button>
                    </div> }
            </section>   
        );
    }
}


ListItem.propTypes = {
    todoItem: PropTypes.object.isRequired
};
