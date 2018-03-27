import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import UpdateTodo from "./UpdateTodo";


@inject("todoItems")
@observer    
export default class ListItem extends React.Component {
    
    render() {
        const {
            toggleCheck,
            editID,
            editTodo,
            deleteTodo,
        } = this.props.todoItems;

        const {
            id,
            description,
            deadline,
            done
        } = this.props.todo;

        const date = deadline.split("-").join("/");
        const crossOut = done ? "crossOut" : null;

        return (
            <section>
                { editID === id
                    ?
                    <UpdateTodo todo={this.props.todo} />
                    :
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
                            onClick={() => editTodo(id)}>
                            Edit
                        </button>
                        <button className="delete-btn"
                            title="delete"
                            onClick={() => deleteTodo(id)}>
                            X
                        </button>
                    </div> }
            </section>
        );
    }
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired
};
