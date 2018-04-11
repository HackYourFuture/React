import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import UpdateTodo from "./UpdateTodo";


@inject("todosStore")
@observer    
export default class ListItem extends React.Component {
    
    render() {
        const {
            toggleCheck,
            editID,
            editTodo,
            deleteTodo,
        } = this.props.todosStore;

        const {
            _id,
            description,
            deadline,
            done
        } = this.props.todo;

        const date = deadline.slice(0, 10).split("-").join("/");
        const dateString = new Date(date).toDateString();
        const lineThrough = done ? "lineThrough" : null;

        return (
            <section>
                {editID === _id
                    ?
                    <UpdateTodo id={_id} />
                    :
                    <div className="list-item">
                        <input type="checkbox"
                            checked={done}
                            onChange={() => toggleCheck(_id)}
                            className="checkbox"
                        />
                        <label className={lineThrough}>
                            <span>{description}, </span>
                            <span>{dateString}</span>
                        </label>
                        <button className="edit-btn"
                            onClick={() => editTodo(_id)}>
                            Edit
                        </button>
                        <button className="delete-btn"
                            title="delete"
                            onClick={() => deleteTodo(_id)}>
                            X
                        </button>
                    </div>}
            </section>
        );
    }
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired
};
