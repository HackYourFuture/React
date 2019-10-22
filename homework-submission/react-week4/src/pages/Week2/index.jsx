import React, { useState } from "react";
import HyfButton from "../../components/Button";
import HyfInput from "../../components/HyfInput";
import TodoList from "../../components/TodoList";
import TodoItems from "../../components/TodoItems";

function Week2() {
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
    toDoItems.find(item => item.name === name);
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
    <div className="App">
      <TodoList
        name="To-Do"
        input={<HyfInput onHandleInputChange={onHandleInputChange} />}
        button={<HyfButton onHandleClick={onHandleClick} buttonText={"Add"} />}
        children={toDoItems.map(item => (
          <TodoItems
            name={item.name}
            key={uniqid(item.name)}
            handleCheckboxChange={() => onHandleCheckboxChange(item.name)}
            done={item.done}
            buttonText={"x"}
            handleRemove={() => handleRemove(item.name)}
          />
        ))}
      />
    </div>
  );
}

export default Week2;
