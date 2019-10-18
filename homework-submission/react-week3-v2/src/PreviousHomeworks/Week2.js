import React, { useState } from "react";
import Button from "../components/Button";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoItems from "../components/TodoItems";
import "./week2.css";

function PreviousHomeworks() {
  const uniqid = require("uniqid");

  const [toDoItems, setTodoItems] = useState([
    {
      name: "eat cheese",
      done: false
    },
    {
      name: "fight monsters",
      done: false
    },
    {
      name: "dont fall over",
      done: false
    }
  ]);

  const [addItem, setAddItem] = useState({});

  const handleRemove = name => {
    const removeTodo = toDoItems.filter(item => item.name !== name);
    setTodoItems(removeTodo);
  };

  const onHandleInputChange = e => {
    const name = e.target.value;
    const newItem = { name };
    setAddItem(newItem);
  };

  const onHandleCheckboxChange = name => {
    setTodoItems(
      toDoItems.map(item => {
        if (item.name === name) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  const onHandleClick = () => {
    const newList = [...toDoItems, addItem];
    setTodoItems(newList);
  };

  return (
    <div className="todo-container">
      <TodoList
        name="To-Do List"
        input={<TodoInput onHandleInputChange={onHandleInputChange} />}
        button={<Button buttonText="Add" onHandleClick={onHandleClick} />}
        children={toDoItems.map(item => (
          <TodoItems
            name={item.name}
            key={uniqid()}
            handleCheckboxChange={() => onHandleCheckboxChange(item.name)}
            done={item.done}
            buttonText={"X"}
            handleRemove={() => handleRemove(item.name)}
          />
        ))}
      />
    </div>
  );
}

export default PreviousHomeworks;
