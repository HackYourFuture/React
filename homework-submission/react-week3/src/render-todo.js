import React from "react";

export default function RenderTodo(props) {
  let done = props.todo.done ? "mark-as-done" : " ";

  return (
    <li>
      <input className="check-box" name="isCompleted" type="checkbox"
        checked={props.todo.done}
        onChange={() => props.onMarkAs(props.index)}
      />
      <span className={"description " + done}>{props.todo.description}</span>
      <span className={"deadline " + done}>{props.todo.deadline}</span>
      <input className="btn" type="button" value="Edit" name="edit"
        onClick={() => props.enterEditingMode(props.todo)}
      />
      <input className="btn" type="button" value="Remove" name="remove"
        onClick={() => props.onRemove(props.todo)}
      />
    </li>
  );
}
