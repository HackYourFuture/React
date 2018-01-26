import React from 'react';
import TaskText from './TaskText';
import TaskDeadLine from './TaskDeadLine';
import './index.css'
import Button from './Button'
import TextField from './TextField'
import Moment from 'moment';
import {inject, observer} from 'mobx-react';



@inject('TasksStore') @observer
export default class Task extends React.Component {
 
    state = {
		taskText: '',
		taskDate: Moment()
    };
    
    componentWillReceiveProps(newProps) {
        if (newProps.isEditing && !this.props.isEditing) {
          const task = this.props.TasksStore.findTask(newProps.id);
          this.setState({taskText: task.description , taskDate: Moment(task.deadline)});
        }
      }
      
    changeDone = (event) => {
        const checked = event.target.checked;
        this.props.TasksStore.changeDone(checked, this.props.id);
      };
        
    handleDeleteTaskClick = () => {
        if (window.confirm('The Task will be permanent delete')) 
        this.props.TasksStore.deleteTask(this.props.id)
        };
        
    handleEditTaskClick = () => {
        this.props.onStartEdit(this.props.id);
        };
        
    handleTaskTextChange = event => {
        this.setState({taskText: event.target.value});
        };
      
    handleSaveClick = () => {
        this.props.TasksStore.updateTask(this.props.id , this.state.taskText , this.state.taskDate.format('YYYY-MM-DD'));
        this.handleCancelClick();
      };
      
    handleCancelClick = () => {
        this.setState({taskText: ''});
        this.props.onStopEdit();
      };
    

    render() {
        const id = this.props.id;
        const task = this.props.TasksStore.findTask(id);
        if (task == null) { return null; }
        let isDone = task.done? "done" : "";
    
            if(!this.props.isEditing){
                return (
                    <li className={" " + isDone}>
                        <input
                            type='checkbox'
                            checked={task.done}
                            onChange={this.changeDone}
                        />
                        <TaskText className='task-text' text={task.description} />, <TaskDeadLine className='task-deadline' deadline={task.deadline} />
                        <Button 
                            label="Edit"
                            onClick={this.handleEditTaskClick}
                          />
                        <Button 
                            label="Delete"
                            onClick={this.handleDeleteTaskClick}
                          />
                    </li>
                );
            }
            else{
        return (
          <li className={" " + isDone}>
          <form className="form">
          <div>
          <TextField
            multiline={false}
            value={this.state.taskText}
            onChange={this.handleTaskTextChange}
          />
          </div>
          <div>
            <Button
              label="Save"
              onClick={this.handleSaveClick}
              disabled={this.state.taskText.trim() === '' || this.state.taskDate === null}
            />
          </div>
          <div>
            <Button
              label="Cancel"
              onClick={this.handleCancelClick}
            />
          </div>
          </form>
          </li>
                );
            }
        }
}