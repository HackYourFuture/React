import React from "react";

export default function TodoList({ children, input, button }) {
  return (
    <div className="list">
      <h1>To-Do List</h1>
      <span>
        {input} {button}
      </span>
      <ul>{children}</ul>
    </div>
  );
}
