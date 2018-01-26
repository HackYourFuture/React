import React from 'react';
import TextField from './TextField';
import Button from './Button';
import Moment from 'moment';
import {observer, inject} from 'mobx-react';

@inject('TasksStore') @observer
export default class TaskForm extends React.Component {
  state = {
    taskText: '',
    taskDate: Moment()
  };

  handleAddTaskClick = () => {
    this.props.TasksStore.addTask(this.state.taskText , this.state.taskDate.format('YYYY-MM-DD'));
    this.setState({taskText: '' , taskDate: Moment()});
  };

  handleTaskTextChange = event => {
    this.setState({
      taskText: event.target.value
    });
  };

  render() {
    return (
      <form className="form">
          <TextField 
            value={this.state.taskText}
            onChange={this.handleTaskTextChange}
          />
          <Button 
              label="Add new task"
              onClick={this.handleAddTaskClick}
              disabled={this.state.taskText.trim() === '' || this.state.taskDate === null}
          />
      </form>
    )
  }

}
