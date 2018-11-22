import React, { Component } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";
import { observer, inject } from "mobx-react";

@inject("TodosStore")
@observer
class TodoList extends Component {
  componentDidMount() {
    this.props.TodosStore.getTodos();
  }
  render() {
    const { TodosStore } = this.props;
    const list = TodosStore.Data;
    const todos = list.map((todo, i) => {
      return <Todo key={i} todo={todo} />;
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

    // const load = () => {
    //   if (state === "loading") {
    //     console.lig(state);
    //     return <div className="loader" />;
    //   } else if (state === "done") {
    //     console.log(state);
    //     return rendering;
    //   }
    // };

    const loading = () => {
      if (TodosStore.state === "loading") {
        return <div className="loader" />;
      } else if (TodosStore.state === "error") {
        return <li className="error">Error occurred </li>;
      } else {
        return rendering;
      }
      // <li className="load"> Application still loading .....</li>
    };

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
        <ul className="todo_list">{loading()}</ul>
        <p />
      </div>
    );
  }
}
export default TodoList;
