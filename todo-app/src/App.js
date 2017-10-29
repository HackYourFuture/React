import React from 'react'
import './App.css'
import Todo from './todo.js'
import todos from './todos.js'


export default class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Todo:</h1>
        {todos.length !==0 ? todos.map((todo, index) =>{
          return(
            <Todo key={index}
            task={todo.task}
            status={todo.status}/>
          )
        }): "No Items...."} 
      </div>
    )
  }
}


        {/* <Todo
          username='Ali'
          imageType='retro'
          task='Get out of the bed'
          TaskDate={new Date(2017, 9, 12).toDateString()}
          state='done'
         />

        <Todo
          username='Alex'
          imageType='monsterid'
          TaskDate={new Date(2017, 9, 13).toDateString()}
          state='undone'
          task='eat your breakfast'
         />
         <Todo
          username='Khaled'
          imageType='identicon'
          TaskDate={new Date(2017, 9, 13).toDateString()}
          state='undone'
          task='brush your breakfast'
         /> */}