import React from "react";
import ListItems from "../../components/ListItems";
import TodoList from "../../components/TodoList";
import "./style.css";

const items = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "2017-09-11",
    done: true
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "2017-09-10",
    done: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "2017-09-09",
    done: false
  }
];

function Week1() {
  return (
    <div>
      <TodoList name={"Static List"}>
        <ListItems
          description={"Get out of bed"}
          deadline={" Wed Sep 13 2017"}
        />
        <ListItems description={"Brush teeth"} deadline={"Thu Sep 14 2017"} />
        <ListItems
          description={"Eat breakfast"}
          deadline={" Fri Sep 15 2017"}
        />
      </TodoList>
      <TodoList name={"Dynamic List"}>
        {items.map(item => (
          <ListItems
            key={item.id}
            description={item.description}
            deadline={item.deadline}
            done={item.done}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default Week1;
