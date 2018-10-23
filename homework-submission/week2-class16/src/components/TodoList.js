import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { data, onCheck } = this.props;
    console.log(onCheck);

    const activity = data.map(item => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          description={item.description}
          deadline={item.deadline}
          done={item.done}
          onCheck={() => onCheck(item)}
        />
      );
    });
    const rendering =
      data.length === 0 ? (
        <p className="zero_todo"> The List IS Empty</p>
      ) : (
        activity
      );
    return (
      <div>
        <h1 className="todos_header">My Todolist</h1>
        <ul className="todo_list">{rendering}</ul>
      </div>
    );
  }
}
export default TodoList;
