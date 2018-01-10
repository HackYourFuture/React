import React, { Component } from 'react';
import Task from './Task';
//import tasks from './task.json';
import TaskForm from './taskForm';
import Moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props);
	let tasks = [];
	if (localStorage.tasks != null) { 
		tasks = JSON.parse(localStorage.tasks);
	}
    this.state = {
      tasksArr: tasks,
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
	localStorage.tasks = JSON.stringify(updatedtasks);
  }
  
  handleTaskAdd = taskText => {
	const ids = this.state.tasksArr.map(task => task.id);
    const newTask =  {
      id:     ids.length === 0 ? 1 : Math.max(...ids) + 1,
      description: taskText,
      deadline:   Moment().format('YYYY-MM-DD'),
      done:   false
    };
	const newTaskArr = [newTask, ...this.state.tasksArr];
	this.setState({tasksArr:newTaskArr});
    localStorage.tasks = JSON.stringify(newTaskArr);
  };
  
  handleTaskDelete = taskId => {
	const newTaskArr = this.state.tasksArr.filter(task => taskId !== task.id);
	this.setState({tasksArr:newTaskArr});
    localStorage.tasks = JSON.stringify(newTaskArr);
  };
  
	handleTaskEdit = taskId => {
		this.setState({editingTaskID: taskId});
	};
	
	handleTaskCancelEdit = () => {
		this.setState({editingTaskID: null});
	};
	
	handleTaskSave = (taskId, taskDescription) => {
		const updatedtasks = this.state.tasksArr.map(task => {
		  if (taskId === task.id) {
			return Object.assign({}, task, {description: taskDescription});
		  }
		  return task;
		});
		this.setState({tasksArr: updatedtasks , editingTaskID: null});
		localStorage.tasks = JSON.stringify(updatedtasks);
	};
  
  render() {
	  
	if (this.state.tasksArr.length === 0) {
      return (
	  <div>
		<h1>Todo list</h1>
		<h3>Enter description:</h3>
        <TaskForm
          onTaskAdd={this.handleTaskAdd}
        />
		
		<div>No items...</div>
	  </div>
	 );
    }
	
    return (
      <div>
        <h1>Todo list</h1>
		<h3>Enter description:</h3>
        <TaskForm
          onTaskAdd={this.handleTaskAdd}
        />
		
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
      </div>
    );
  }
}