import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import tasksStore from './TasksStore';
import {observer} from 'mobx-react';

@observer
export default class App extends Component {

  constructor(props) {
		super(props);
	
    this.state = {
	  	editingTaskID: null
    };

  }

	handleTaskStartEdit = taskId => {
		this.setState({editingTaskID: taskId});
	};
	
	handleTaskStopEdit = () => {
		this.setState({editingTaskID: null});
	};
	
	componentDidMount = () => {
    tasksStore.loadTasks()
	};
	
  
  render() {
		return (
	  <div>
			<h1>Todo list</h1>
			<h4 className='task-done'>✓ = {tasksStore.doneCount}</h4>
			<h3>Enter description:</h3>
			<TaskForm tasksStore = {tasksStore} />
	  	{tasksStore.loadingTasks ? (
			<div className ="loader"></div>)
			: 
			(
				tasksStore.tasks.length === 0 ? <div>No items...</div>
			:
			 <ul className='task-list'>
					{
						tasksStore.tasks.map(item => 
						<Task 
							key={item.id} 
							id={item.id} 
							tasksStore = {tasksStore}
							isEditing={item.id === this.state.editingTaskID}
							onStartEdit={this.handleTaskStartEdit}
							onStopEdit={this.handleTaskStopEdit}
						/>)
					}
				</ul>
			)
	  	}
	  </div>
	 	);
  }
}