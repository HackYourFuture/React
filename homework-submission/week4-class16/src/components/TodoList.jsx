import React, { Component } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";
import { observer, inject } from "mobx-react";

@inject("TodosStore")
@observer
class TodoList extends Component {
  render() {
    const { TodosStore } = this.props;
    const list = TodosStore.Data;
    const todos = list.map(todo => {
      return <Todo key={todo.id} todo={todo} />;
    });
    const rendering =
      list.length === 0 ? (
        <li className="zero_todo">
          {" "}
          The List IS Empty. Please add new todo....
        </li>
      ) : (
        todos
      );
    const leftTodos =
      TodosStore.remainingTodos === 1
        ? `You still have 
          ${TodosStore.remainingTodos} todo needs action`
        : `You still have 
          ${TodosStore.remainingTodos} todos need action`;

    return (
      <div>
        <h1 className="todos_header">My Todolist</h1>
        <AddForm className="todo_form" />
        <p className="left_todos">{leftTodos}</p>
        <ul className="todo_list">{rendering}</ul>
        <p />
      </div>
    );
  }
}
export default TodoList;
