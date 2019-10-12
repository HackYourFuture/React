import React, { useState } from "react";
import HyfButton from "./components/HyfButton";
import HyfInput from "./components/HyfInput";
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'
import "./App.css";


function App() {
  const uniqid = require('uniqid')

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
  
  const [addItem, setAddItem] = useState({})
  

    console.log(toDoItems)

  
  const handleRemove = (name) => {
    const removeTodo = toDoItems.filter(item => item.name !== name)
  setTodoItems(removeTodo)
  }

  const onHandleInputChange = e => {
   const name= e.target.value
   const newItem = { name }
   console.log(newItem)
   setAddItem(newItem)
  }

  const onHandleClick = () => {
    const newList = [...toDoItems, addItem]
    console.log(newList)
    setTodoItems(newList)
  }

  

 

  return <div className="App">
  <TodoList input={<HyfInput onHandleInputChange={onHandleInputChange}/>} 
  button={<HyfButton onHandleClick={onHandleClick} />} 
  children={toDoItems.map(item => 
  <TodoItems name={item.name} 
  key={uniqid(item.name.substring(1, 3))}
   buttonText={'x'} 
   handleRemove={() => handleRemove(item.name)}/>)} />
  </div>;
}

export default App;