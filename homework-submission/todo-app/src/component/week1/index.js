import React from "react";

import Task from "./staticTaskDescription";
import DeadLine from "./staticListDeadLine";

const staticTodo = (description, deadline) => {
  return (
    <ul>
      {Task(description)}
      {DeadLine(deadline)}
    </ul>
  );
};

const Week1 = () => {
  return (
    <div>
      <section className="week1">
        <h1 className="static-title">Todos (static list)</h1>
        {staticTodo("Get out of bed", "Wed Sep 13 2017")}
        {staticTodo("Brush teeth", "Thu Sep 14 2017")}
        {staticTodo("Eat breakfast", "Fri Sep 15 2017")}
      </section>
    </div>
  );
};

export default Week1;
