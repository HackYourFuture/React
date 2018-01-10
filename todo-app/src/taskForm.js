import React from 'react'
import TextField from './TextField'
import LinkButton from './linkButton'

export default class TaskForm extends React.Component {

  state = {
    taskText: ''
  };

  handleAddTaskClick = () => {
    this.props.onTaskAdd(this.state.taskText);
    this.setState({taskText: ''});
  };

  handleTaskTextChange = event => {
    this.setState({
      taskText: event.target.value
    });
  };

  render() {
    return (
      <form className=''>
          <TextField
            multiline={false}
            value={this.state.taskText}
            onChange={this.handleTaskTextChange}
          />
          <LinkButton
            label="add"
            onClick={this.handleAddTaskClick}
            disabled={this.state.taskText.trim() === ''}
          />
      </form>
    )
  }

}