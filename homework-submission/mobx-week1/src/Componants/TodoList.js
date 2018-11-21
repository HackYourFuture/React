import React from "react";
import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";

@inject("TodoStore")
@observer
class TodoList extends React.Component {
  render() {
    const { TodoStore } = this.props;
    const showTodoElements =
      TodoStore.todos.length !== 0 ? (
        TodoStore.todos.data.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))
      ) : (
        <li>
          <p>The list is empty!</p>
        </li>
      );
    return <ul className="list">{showTodoElements}</ul>;
  }
}

export default TodoList;
