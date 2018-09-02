import React, { Component } from "react";
import Todo from "./Todo";

class Todolist extends Component {
  render() {
    const { items } = this.props;
    const todos = items.map(todo => (
      <Todo
        todo={todo}
        key={todo.id}
        handler={() => this.props.handler(todo)}
        onDelete={() => this.props.onDelete(todo.id)}
        onAdd={this.props.onAdd}
        onEdit={this.props.onEdit}
      />
    ));

    const uiContent = items.length === 0 ? "Todo list is empty" : todos;
    return (
      <div className="all-todos">
        <ul className="todo-items"> {uiContent}</ul>
      </div>
    );
  }
}

export default Todolist;
