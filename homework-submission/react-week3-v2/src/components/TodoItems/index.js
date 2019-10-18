import React from "react";
import "./styleItems.css";

export default function TodoItems({
  name,
  done,
  buttonText,
  handleCheckboxChange,
  handleRemove
}) {
  return (
    <li
      className="todoListItems"
      style={{ textDecoration: done ? "line-through" : "" }}
    >
      <input type="checkbox" onChange={handleCheckboxChange} />
      {name}
      {done}
      <button className="remove-btn" onClick={handleRemove}>
        {buttonText}
      </button>
    </li>
  );
}
