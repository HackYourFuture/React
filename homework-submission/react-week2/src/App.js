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

  const [isDone, setIsDone] = useState([])
  
  const [addItem, setAddItem] = useState({})

  
  const handleRemove = (name) => {
    const removeTodo = toDoItems.filter(item => item.name !== name)
  setTodoItems(removeTodo)
  }

  const onHandleInputChange = e => {
   const name= e.target.value
   const newItem = { name }
   setAddItem(newItem)
  }

  const onHandleCheckboxChange = (name) => {
  const isCompletedItem = isDone.find(i => i.name === name)
  if(isCompletedItem){
    const completedItem = isDone.filter(i => i.name !== name)
    setIsDone(completedItem)
  }else{
    const completedItem = toDoItems.find(i => i.name === name)
    const completedItems = [...isDone, completedItem]
    setIsDone(completedItems)
  }
  }

  const onHandleClick = () => {
    const newList = [...toDoItems, addItem]
    setTodoItems(newList)
  }

  return <div className="App">
  <TodoList 
  input={<HyfInput onHandleInputChange={onHandleInputChange}/>} 
  button={<HyfButton onHandleClick={onHandleClick} />} 
  children={toDoItems.map(item => 
  <TodoItems 
   name={item.name} 
   key={uniqid(item.name.substring(1, 3))}
   handleCheckboxChange={() => onHandleCheckboxChange(item.name)}
   done={isDone.find(d=> d.name === item.name)}
   buttonText={'x'} 
   handleRemove={() => handleRemove(item.name)}/>)} />
  </div>;
}

export default App;