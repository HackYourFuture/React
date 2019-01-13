import React from "react";

export default function RenderTodo(props) {
  let styles = { textDecoration: props.todo.done ? "line-through" : "" }
  return (
    <li>
      <input className="check-box" name="isCompleted" type="checkbox"
        checked={props.todo.done}
        onChange={() => props.markAs(props.todo)}
      />
      <span className="description" style={styles}>{props.todo.description}</span>
      <span className="deadline" style={styles}>{props.todo.deadline}</span>
      <input className="btn" type="button" value="Edit" name="edit"
        onClick={() => props.editMode(props.todo)}
      />
      <input className="btn" type="button" value="Remove" name="remove"
        onClick={() => props.removeItem(props.todo)}
      />
    </li>
  );
}
