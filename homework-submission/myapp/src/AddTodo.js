import React from "react";

const AddTodo = ({ onAdd }) => {
    return (
        <form onSubmit={onAdd}>
            <input type="text" name="description" placeholder="Description" />
            <input type="date" name="deadline" placeholder="Deadline" />
            <input type="submit" name="add" value="Add" />
        </form>
    );
};

export default AddTodo;