import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
class App extends Component {
  
  render() {
    let tasks = [
      {
        task: " Get out of bed",
        date: " Wed Sep 13 2017",
        deadline: "same day"

      },
      {
        task: " Brush teeth",
        date: "Thu Sep 14 2017",
        deadline: "same day"

      },
      {
        task: " Eat breakfast",
        date: " Fri Sep 15 2017",
        deadline: "same day"

      }
    ]
    return (
     <div className = "root">
       {tasks.map((ele,i)=>
<Todo task = {ele.task} date = {ele.date} deadline = {ele.deadline} key= {i}/>

       )}
    
     </div>
    );
  }
}

export default App;
