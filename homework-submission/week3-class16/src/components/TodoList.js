import React, { Component } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";

class TodoList extends Component {
  render() {
    const { data, handleOnCheck, handleOnDelete, OnUpdate } = this.props;

    const todos = data.map(item => {
      return (
        <Todo
          key={item.id}
          todo={item}
          handleOnCheck={handleOnCheck}
          handleOnDelete={handleOnDelete}
          OnUpdate={OnUpdate}
        />
      );
    });
    const rendering =
      data.length === 0 ? (
        <li className="zero_todo">
          {" "}
          The List IS Empty. Please add new todo....
        </li>
      ) : (
        todos
      );
    return (
      <div>
        <h1 className="todos_header">My Todolist</h1>
        <AddForm className="todo_form" onAddTodo={this.props.onAddTodo} />
        <ul className="todo_list">{rendering}</ul>
      </div>
    );
  }
}
export default TodoList;
