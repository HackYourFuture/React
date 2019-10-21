import React from "react";
import "./style.css";

const ListItems = ({ description, deadline, done }) => {
  return (
    <li className={done ? "isDone" : "list-items"}>
      {description}, {deadline}
    </li>
  );
};

export default ListItems;
