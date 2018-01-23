import React from 'react';
import {inject, observer} from 'mobx-react';
import TaskBody from './TaskBody';
import './index.css';

@inject('taskStore') 
@observer
export default class Task extends React.Component {


  render() {
      const{todoItem, toggleStatus, isEditing, onRemove, onEdit, onCancleEdit, onSaveEdit} = this.props;
        return (
            <li className="task-list">
             <span> <input type = 'checkbox' checked = {todoItem.done} onChange = {() => toggleStatus(todoItem.id)}/></span>
            <span> {todoItem.done? <span className = 'task-done'>
                     Task: <TaskBody 
                           task = {todoItem.description} 
                           onRemove = {() => { onRemove(todoItem.id) }}
                           isEditing = {isEditing}
                           onEdit = {() => { onEdit(todoItem.id); }}
                           onCancleEdit = {() => { onCancleEdit(todoItem.id)}}
                           onSaveEdit = {description => { onSaveEdit(todoItem.id, description) ;}}
                           />
                     
             </span>
                      :
              <span className = 'task-not-done'>
                    Task: <TaskBody task = {todoItem.description}
                           onRemove = {() => { onRemove(todoItem.id) }}
                           isEditing = {isEditing}
                           onEdit = {() => { onEdit(todoItem.id); }}
                           onCancleEdit = {() => { onCancleEdit(todoItem.id)}}
                           onSaveEdit = {description => { onSaveEdit(todoItem.id, description)
                            ;}}
                          />
             </span>
}
             </span>
           
            </li>  
            
       )
          
      
  }
}