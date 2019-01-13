import React from "react";

export default function AddTodo(props) {
  return (
    <form onSubmit={props.addItem} className="adding-form">
      <label htmlFor="description">description: </label>
      <input type="text" name="description" id="description" />
      <label htmlFor="deadline">Deadline: </label>
      <input type="date" name="deadline" id="deadline" />
      <input type="submit" value="Add" className="add-btn" />
    </form>
  );
}
