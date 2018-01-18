import React from 'react';
import TaskText from './TaskText';
import TaskDate from './TaskDate';
import './task.css';
import LinkButton from './LinkButton';
import TextField from './TextField'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {observer} from 'mobx-react';

@observer
export default class Task extends React.Component {
	
	state = {
		taskText: '',
		taskDate: Moment()
	};
  
  componentWillReceiveProps(newProps) {
    if (newProps.isEditing && !this.props.isEditing) {
      const task = this.props.tasksStore.findTask(newProps.id);
      this.setState({taskText: task.description , taskDate: Moment(task.deadline)});
    }
  }
  
  changeDone = (event) => {
    const checked = event.target.checked;
    this.props.tasksStore.changeDone(checked, this.props.id);
  };
	
	handleDeleteTaskClick = () => {
    if (window.confirm('Are you sure to delete this task?')) 
    this.props.tasksStore.deleteTask(this.props.id)
	};
	
	handleEditTaskClick = () => {
    this.props.onStartEdit(this.props.id);
	};
	
	handleTaskTextChange = event => {
		this.setState({taskText: event.target.value});
	};

	handleTaskDateChange = date => {
    this.setState({taskDate: date});
  };
  
	handleSaveClick = () => {
		this.props.tasksStore.updateTask(this.props.id , this.state.taskText , this.state.taskDate.format('YYYY-MM-DD'));
    this.handleCancel();
  };
  
  handleCancel = () => {
    this.setState({taskText: ''});
    this.props.onStopEdit();
  };

  render() {
    const taskId = this.props.id;
    const task = this.props.tasksStore.findTask(taskId);
    if (task == null) { return null; }
    const isDone = task.done? "done" : "";

		if(!this.props.isEditing){
			return (
				<li className={"task-item " + isDone}>
					<input
						type='checkbox'
						checked={task.done}
						onChange={this.changeDone}
					/>
					<TaskText text={task.description} />, <TaskDate date={task.deadline} />
					<LinkButton
						label="edit"
						onClick={this.handleEditTaskClick}
					  />
					<LinkButton
						label="remove"
						onClick={this.handleDeleteTaskClick}
					  />
				</li>
			);
		}
		else{
			return (
      <li className={"task-item " + isDone}>
      <form className="form">
      <div className="form-input">
      <TextField
        multiline={false}
        value={this.state.taskText}
        onChange={this.handleTaskTextChange}
      />
      </div>
      <div className="form-input">
        <DatePicker 
          selected={this.state.taskDate} 
          onChange={this.handleTaskDateChange} 
          dateFormat="YYYY-MM-DD"
        />
      </div>
      <div className="form-button">
        <LinkButton
          label="Save"
          onClick={this.handleSaveClick}
          disabled={this.state.taskText.trim() === '' || this.state.taskDate === null}
        />
      </div>
      <div className="form-button">
        <LinkButton
          label="Cancel"
          onClick={this.handleCancel}
        />
      </div>
      </form>
      </li>
			);
		}
    }
}