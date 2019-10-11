import React, { useState } from "react";
// import HyfButton from "./components/HyfButton";
import HyfInput from "./components/HyfInput";
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'
import "./App.css";
import HyfButton from "./components/HyfButton";

function App() {
  const [toDoItems, setTodoItems] = useState([
    {
      name: "eat cheese"
    },
    {
      name: "fight monsters"
    },
    {
      name: "dont fall over"
    }
  ]);

  const handleRemove = (name) => {
  const newTodo = toDoItems.filter(item => item.name !== name)
  setTodoItems(newTodo)
  }

  return <div className="App">
   <TodoList input={<HyfInput />} button={<HyfButton />} children={toDoItems.map(item => 
   <TodoItems name={item.name} 
   buttonText={'x'} 
   handleRemove={() => handleRemove(item.name)}/>)} />
  </div>;
}

export default App;