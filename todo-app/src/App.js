import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import Moment from 'moment';
import {loadTasks, saveTasks} from './localStorageUtils'

export default class App extends Component {

  constructor(props) {
    super(props);
	
    this.state = {
      tasksArr: loadTasks(),
	  editingTaskID: null
    };

    this.handleDoneChange = this.handleDoneChange.bind(this);
  }
  
  handleDoneChange(doneValue, taskId) {
    const updatedtasks = this.state.tasksArr.map(task => {
      if (taskId === task.id) {
        return Object.assign({}, task, {done: doneValue});
      }
      return task;
    });
    this.setState({tasksArr: updatedtasks});
	saveTasks(updatedtasks);
  }
  
  handleTaskAdd = (taskText , taskDate) => {
	const ids = this.state.tasksArr.map(task => task.id);
    const newTask =  {
      id:     ids.length === 0 ? 1 : Math.max(...ids) + 1,
      description: taskText,
      deadline:   taskDate,
      done:   false
    };
	const newTaskArr = [newTask, ...this.state.tasksArr];
	this.setState({tasksArr:newTaskArr});
    saveTasks(newTaskArr);
  };
  
  handleTaskDelete = taskId => {
	const newTaskArr = this.state.tasksArr.filter(task => taskId !== task.id);
	this.setState({tasksArr:newTaskArr});
    saveTasks(newTaskArr);
  };
  
	handleTaskEdit = taskId => {
		this.setState({editingTaskID: taskId});
	};
	
	handleTaskCancelEdit = () => {
		this.setState({editingTaskID: null});
	};
	
	handleTaskSave = (taskId, taskDescription , taskDate) => {
		const updatedtasks = this.state.tasksArr.map(task => {
		  if (taskId === task.id) {
				return Object.assign({}, task, {description: taskDescription , deadline: taskDate});
		  }
		  return task;
		});
		this.setState({tasksArr: updatedtasks , editingTaskID: null});
		saveTasks(updatedtasks);
	};
  
  render() {
      return (
	  <div>
		<h1>Todo list</h1>
		<h3>Enter description:</h3>
        <TaskForm
          onTaskAdd={this.handleTaskAdd}
        />
	  {this.state.tasksArr.length === 0 ? 
	  <div>No items...</div> 
	  : 
		<ul className='task-list'>
			{this.state.tasksArr.map(item => <Task key={item.id} task={item} 
			onDoneChange={this.handleDoneChange} 
			onTaskDelete={this.handleTaskDelete}
			isEditing={item.id === this.state.editingTaskID}
			onEdit={this.handleTaskEdit}
			onCancelEdit={this.handleTaskCancelEdit}
			onSave={this.handleTaskSave}
			/>)}
		</ul>
	  }
		
	  </div>
	 );
  }
}