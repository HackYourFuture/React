import React from "react";
import "./styleItems.css";

export default function TodoItems({
  name,
  done,
  buttonText,
  handleCheckboxChange,
  handleRemove
}) {
  const isDone = () => {
    return {
      textDecoration: done ? "line-through" : ""
    };
  };

  return (
    <li className="todoListItems" style={isDone()}>
      <input type="checkbox" onChange={handleCheckboxChange} />
      {name}
      <button className="remove-btn" onClick={handleRemove}>
        {buttonText}
      </button>
    </li>
  );
}
