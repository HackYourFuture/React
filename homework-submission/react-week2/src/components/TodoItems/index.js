import React from "react";
import "./style.css";

export default function TodoItems({
  name,
  done,
  buttonText,
  handleCheckboxChange,
  handleRemove
}) {
  return (
    <li className={done ? "isDone" : ""}>
      <input type="checkbox" onChange={handleCheckboxChange} />
      {name} {done}
      <button className="remove-btn" onClick={handleRemove}>
        {buttonText}
      </button>
    </li>
  );
}
