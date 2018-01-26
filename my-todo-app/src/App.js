import React, { Component } from 'react';
import Task from './Task' 
//import tasks from './tasks.json'
import TaskForm from './TaskForm';
import TasksStore from './stores/TasksStore';
import {inject, observer} from 'mobx-react';

@observer
export default class App extends Component {

	handleTaskStartEdit = taskId => {
		TasksStore.EditTask(taskId);
	};
	
	handleTaskStopEdit = () => {
		TasksStore.EditTask(null);
	};
	
	componentDidMount = () => {
    TasksStore.loadTasks()
	};

	renderForm(){
		return (
			<div>
				<h1>Start Focusing</h1>
        <h2>TODOS</h2>
				<TaskForm TasksStore = {TasksStore} />
			</div>
		)
	}

	renderList(){
		return (
      <div>
			<ul className='tasks'>
					{
						TasksStore.tasks.map(item => 
						<Task 
							key={item.id} 
							id={item.id} 
							TasksStore = {TasksStore}
							isEditing={item.id === TasksStore.editingId}
							onStartEdit={this.handleTaskStartEdit}
							onStopEdit={this.handleTaskStopEdit}
						/>)
					}
				</ul>
        <h2 className='counter'>Tasks Counter = {TasksStore.Count}</h2>
        </div>
		)
	}
	
  
  render() {

		if(TasksStore.loadingTasks){
			return (
				<div>
					{this.renderForm()}
				</div>
			)
		}
		else{
			if(TasksStore.tasks.length === 0){
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