import React, { Component } from 'react';
import Task from './Task';
import tasks from './task.json';

class App extends Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      tasks_arr: tasks,
    };

    this.handleDoneChange = this.handleDoneChange.bind(this);
  }
  
  handleDoneChange(doneValue, taskId) {
    const updatedtasks = this.state.tasks_arr.map(task => {
      if (taskId === task.id) {
        return Object.assign({}, task, {done: doneValue});
      }
      return task;
    });
    this.setState({
      tasks_arr: updatedtasks
    });
  }
  
  render() {
	  
    if (this.state.tasks_arr.length === 0) {
      return (
	  <div>
	    <h1>Todo list</h1>
	    <div>No items...</div>
	  </div>
	 );
    }
	
    return (
      <div>
        <h1>Todo list</h1>
	 <ul className='task-list'>
	  {this.state.tasks_arr.map(item => <Task key={item.id} task={item} onDoneChange={this.handleDoneChange} />)}
	 </ul>
      </div>
    );
  }
}

export default App;
