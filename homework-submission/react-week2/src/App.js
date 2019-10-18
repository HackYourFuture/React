import React, { useState } from "react";
import HyfButton from "./components/HyfButton";
import HyfInput from "./components/HyfInput";
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
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
    const todo = toDoItems.find(item => item.name === name);
    console.log(todo);
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
        input={<HyfInput onHandleInputChange={onHandleInputChange} />}
        button={<HyfButton onHandleClick={onHandleClick} />}
        children={toDoItems.map(item => (
          <TodoItems
            name={item.name}
            key={uniqid(item.name.substring(1, 3))}
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

export default App;
