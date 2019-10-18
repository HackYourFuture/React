import React from "react";
import "./todoList.css";

export default function TodoList({ name, children, input, button }) {
  function sectionStyle() {
    if ({ input } === undefined || { button } === undefined) {
      return {
        display: "none"
      };
    }
  }
  return (
    <div className="list">
      <h1>{name}</h1>
      <section style={sectionStyle()}>
        {input} {button}
      </section>
      <ul>{children}</ul>
    </div>
  );
}
