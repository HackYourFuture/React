import React from 'react';
import TaskText from './TaskText';
import TaskDate from './TaskDate';
import './task.css';
import LinkButton from './LinkButton';
import TextField from './TextField'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Task extends React.Component {
	
	state = {
		taskText: '',
		taskDate: Moment()
	};
  
    componentWillReceiveProps(newProps) {
    if (newProps.isEditing && !this.props.isEditing) {
      this.setState({taskText: newProps.task.description , taskDate: Moment(newProps.task.deadline)});
    }
  }
  
    constructor(props) {
    super(props);
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(event) {
        const checked = event.target.checked;
        this.props.onDoneChange(checked, this.props.task.id);
    }
	
	handleDeleteTaskClick = () => {
		if (window.confirm('Are you sure to delete this task?')) 
			this.props.onTaskDelete(this.props.task.id);
	};
	
	handleEditTaskClick = () => {
		this.props.onEdit(this.props.task.id);
	};
	
	handleTaskTextChange = event => {
		this.setState({taskText: event.target.value});
	};

	handleTaskDateChange = date => {
    this.setState({taskDate: date});
  };
  
	handleSaveClick = () => {
		this.props.onSave(this.props.task.id , this.state.taskText , this.state.taskDate.format('YYYY-MM-DD'));
		this.setState({taskText: ''});
	};

    render() {
        const {description , deadline , done } = this.props.task;
        const isDone = done? "done" : "";

		if(!this.props.isEditing){
			return (
				<li className={"task-item " + isDone}>
					<input
						type='checkbox'
						checked={done}
						onChange={this.toggleDone}
					/>
					<TaskText text={description} />, <TaskDate date={deadline} />
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
              onClick={this.props.onCancelEdit}
            />
          </div>
      </form>
				</li>
			);
		}
    }

}