import React, { useState } from "react";
import "../../App.css";
import Button from "./button.jsx";
import Input from "./todoInput";
const uuid = require("uuid");

const PreviousHomeworks = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      description: "Get out of bed",
      deadline: "2017-09-11",
      done: true
    },
    {
      id: uuid(),
      description: "Brush teeth",
      deadline: "2017-09-10",
      done: false
    },
    {
      id: uuid(),
      description: "Eat breakfast",
      deadline: "2017-09-09",
      done: false
    }
  ]);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleInput = e => {
    e.preventDefault();
    e.target.name === "description"
      ? setDescription(e.target.value)
      : setDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      description: description,
      deadline: date,
      done: false
    };
    const newTodos = [...todos, newItem];

    setTodos(newTodos);
    setDate("");
    setDescription("");
  };

  const remove = id => {
    const upDatedTodos = todos.filter(e => e.id !== id);
    setTodos(upDatedTodos);
  };

  return (
    <div>
      <h1>Time management is life management!</h1>
      <ul>
        {!todos.length ? (
          <li>please add item to your list!</li>
        ) : (
          todos.map(todo => {
            return (
              <li key={todo.id}>
                <p>{todo.description}</p>
                <p>deadline: {todo.deadline}</p>
                <Button
                  buttonType="Remove Todo"
                  handleClick={() => remove(todo.id)}
                />
              </li>
            );
          })
        )}

        <form onSubmit={handleSubmit} id="form">
          <Input
            handleInput={handleInput}
            type="text"
            name="description"
            value={description}
          />
          <Input
            handleInput={handleInput}
            type="date"
            name="date"
            value={date}
          />
          <Button buttonType="add" />
        </form>
      </ul>
    </div>
  );
};

export default PreviousHomeworks;