import React from 'react';
import AppTask from './AppTask';
import AppDate from './AppDate';
import './index.css';

export default class Task extends React.Component{

  handleTaskDone = () =>  this.props.handleTaskDone(this.props.todoItem.id)
  
  render() {
  const{todoItem, handleTaskDone} = this.props;
       return (
            <li className="task-list">
             <span>{todoItem.done ? <input type = 'checkbox' onClick={()=>handleTaskDone(todoItem.id)}/>
              :
              <input type = 'checkbox' checked onClick={()=> handleTaskDone(todoItem.id)}/>   
             }
                 </span>
            <span> {todoItem.done? <span className = 'task-done'>
                     Task: <AppDate deadline={todoItem.description}/>
                      <br/>
                     Deadline: <AppDate deadline={todoItem.deadline}/></span>
                      :
                  <span className = 'task-not-done'>
                    Task: <AppDate deadline={todoItem.description}/>
                      <br/>
                    Deadline: <AppDate deadline={todoItem.deadline}/></span>
}
             </span>
           
            </li>  
            
       )
          
      
  }
      
      
       
   
}
