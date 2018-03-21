import React from "react";
import PropTypes from "prop-types";
import UpdateTodo from "./UpdateTodo";


const ListItem = (({ todoItems, todo }) => {

    const {
        toggleCheck,
        toggleEdit,
        deleteTodo
    } = todoItems;

    const {
        id,
        description,
        deadline,
        done,
        editMode
    } = todo;

    const date = deadline.split("-").join("/");
    const crossOut = done ? "crossOut" : null;

    return (
        <section>
            {
                editMode
                ?
                <UpdateTodo todo={todo}
                    todoItems={todoItems}
                />
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
                        onClick={() => toggleEdit(id)}>
                        Edit
                    </button>
                    <button className="delete-btn"
                        title="delete"
                        onClick={() => deleteTodo(id)}>
                        X
                    </button>
                </div>
            }
        </section>
    );
})


ListItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default ListItem;
