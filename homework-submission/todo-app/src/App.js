import React, { useState } from "react";
import "./App.css";
import Button from "./component/button.jsx";
import Input from "./component/todoInput";

const App = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleInput = e => {
    e.preventDefault();
    e.target.type === "text"
      ? setDescription(e.target.value)
      : setDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: todos.length + 1,
      description: description,
      deadline: date,
      done: false
    };
    const newTodos = [...todos, newItem];

    setTodos(newTodos);
    setDescription("");
    setDate(null);
    const inputText = document.querySelector("#text");
    const inputDate = document.querySelector("#date");
    inputText.value = "";
    inputDate.value = null;
  };

  const remove = id => {
    const upDatedTodos = todos.filter((e, i) => i !== id - 1);
    console.log(upDatedTodos);
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
                <p>
                  {todo.id}. {todo.description}
                </p>
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
          <Input handleInput={handleInput} type="text" />
          <Input handleInput={handleInput} type="date" />
          <Button buttonType="add" />
        </form>
      </ul>
    </div>
  );
};

export default App;
