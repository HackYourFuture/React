import React from 'react'
import TextField from './TextField'
import LinkButton from './LinkButton'
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class TaskForm extends React.Component {

  state = {
    taskText: '',
    taskDate: Moment()
  };

  handleAddTaskClick = () => {
    this.props.onTaskAdd(this.state.taskText , this.state.taskDate.format('YYYY-MM-DD'));
    this.setState({taskText: '' , taskDate: Moment()});
  };

  handleTaskTextChange = event => {
    this.setState({
      taskText: event.target.value
    });
  };
  handleTaskDateChange = date => {
    this.setState({
      taskDate: date
    });
  };

  render() {
    return (
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
              label="add"
              onClick={this.handleAddTaskClick}
              disabled={this.state.taskText.trim() === '' || this.state.taskDate === null}
            />
          </div>
      </form>
    )
  }

}
