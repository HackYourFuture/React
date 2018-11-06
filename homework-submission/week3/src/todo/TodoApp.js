import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "./index.css";

class TodoApp extends React.Component {
  render() {
    const { todos, onChange, onRemove, onUpdate } = this.props;
    const todoElements =
      todos.length !== 0 ? (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            deadline={todo.deadline}
            done={todo.done}
            onChange={() => onChange(todo.id)}
            onRemove={() => onRemove(todo.id)}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <li>
          <p>The list is empty!</p>
        </li>
      );
    return (
      <div className="main">
        <h2 className="title">TODO List</h2>
        <TodoInput onAdd={this.props.onAdd} />
        <ul className="list">{todoElements}</ul>
      </div>
    );
  }
}

export default TodoApp;
