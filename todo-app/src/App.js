import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import tasksStore from './TasksStore';
import {observer} from 'mobx-react';

@observer
export default class App extends Component {

	handleTaskStartEdit = taskId => {
		tasksStore.EditTask(taskId);
	};
	
	handleTaskStopEdit = () => {
		tasksStore.EditTask(null);
	};
	
	componentDidMount = () => {
    tasksStore.loadTasks()
	};

	renderForm(){
		return (
			<div>
				<h1>Todo list</h1>
				<h4 className='task-done'>✓ = {tasksStore.doneCount}</h4>
				<h3>Enter description:</h3>
				<TaskForm tasksStore = {tasksStore} />
			</div>
		)
	}

	renderList(){
		return (
			<ul className='task-list'>
					{
						tasksStore.tasks.map(item => 
						<Task 
							key={item.id} 
							id={item.id} 
							tasksStore = {tasksStore}
							isEditing={item.id === tasksStore.editingTaskID}
							onStartEdit={this.handleTaskStartEdit}
							onStopEdit={this.handleTaskStopEdit}
						/>)
					}
				</ul>
		)
	}
	
  
  render() {

		if(tasksStore.loadingTasks){
			return (
				<div>
					{this.renderForm()}
					<div className ="loader"></div>
				</div>
			)
		}
		else{
			if(tasksStore.tasks.length === 0){
				return (
				<div>
					{this.renderForm()}
					<div>No items...</div>
				</div>
				)
			}
			else{
				return (
					<div>
						{this.renderForm()}
						{this.renderList()}
					</div>
					)
			}
		}
	
		
  }
}