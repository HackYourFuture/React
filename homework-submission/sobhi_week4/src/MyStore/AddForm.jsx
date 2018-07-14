import React from "react";

const AddForm = ({ addTodo }) =>
    <form onSubmit={addTodo}>
        <input type="text" name="description" placeholder="Add a new task" />
        <input type="date" name="deadline" placeholder="Add a new date" />
        <button >Submit</button>
    </form>

export default AddForm; 