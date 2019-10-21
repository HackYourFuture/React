import React from "react";
import "./style.css";

export default function TodoList({ name, children, input, button }) {
  function sectionStyle() {
    if ({ input } === undefined || { button } === undefined) {
      return {
        display: "none"
      };
    }
  }
  return (
    <div className="list" style={sectionStyle()}>
      <ul className="todo-list">
        <h1 className="list-name">{name}</h1>
        {input} {button}
        {children}
      </ul>
    </div>
  );
}
