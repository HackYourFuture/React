import React, { Component } from "react";
import Todo from "./Todo";

const list = [
  {
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017"
  },
  {
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017"
  }
];
class Todolist extends Component {
  render() {
    const activity = list.map((item, i) => {
      return (
        <Todo key={i} description={item.description} deadline={item.deadline} />
      );
    });

    return (
      <div>
        <h1 className="todos_header">My Todolist</h1>
        <ul className="todo_list">{activity}</ul>
      </div>
    );
  }
}
export default Todolist;
