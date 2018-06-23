import React from "react";

const AddForm = (props) =>

    <form onSubmit={props.submitHandler}>

        <input type="add" name="task" placeholder="Add a new task" />

        <input type="add" name="date" placeholder="Add a new date" />

        <input type="submit" name="Add" value='add' />

    </form>

export default AddForm;     