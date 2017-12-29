import React from 'react';
import AppTask from './AppTask';
import AppDate from './AppDate';
import './index.css';

export default class Task extends React.Component{

  toggleStatus = () =>  this.props.toggleStatus(this.props.todoItem.id)
  
  render() {
  const{todoItem, toggleStatus} = this.props;
       return (
            <li className="task-list">
             <span> <input type = 'checkbox' checked = {todoItem.done} onChange = {() => toggleStatus(todoItem.id)} /></span>
            <span> {todoItem.done? <span className = 'task-not-done'>
                     Task: <AppTask task = {todoItem.description}/>
                      <br/>
                     Deadline: <AppDate deadline = {todoItem.deadline}/></span>
                      :
                  <span className = 'task-done'>
                    Task: <AppTask task = {todoItem.description} />
                      <br/>
                    Deadline: <AppDate deadline = {todoItem.deadline}/></span>
}
             </span>
           
            </li>  
            
       )
          
      
  }
     
      
       
   
}

