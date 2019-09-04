import React from 'react';
import TaskAddForm from './TaskAddForm';
import TaskList from './TaskList';
import { StyledBanner, StyledContainer, StyledTitle } from '../styled';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.data,
      lastId: this.props.data.length
    };
  }

  handleAdd(description, deadline) {
    // I any field is empty, alert user without adding the task
    if (description === '' || deadline === '')
      return alert('Please fill all the fields!');

    let lastId = this.state.lastId;
    const newTask = {
      id: ++lastId,
      description,
      deadline,
      done: false
    };

    this.setState({ tasks: [...this.state.tasks, newTask], lastId });
  }

  handleRemove(id) {
    const filteredTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: filteredTasks });
  }

  handleToggleMarked(id) {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    this.setState({ tasks });
  }

  render() {
    return (
      <StyledContainer>
        <StyledTitle>React Task App</StyledTitle>
        <TaskAddForm onAdd={this.handleAdd.bind(this)} />
        <TaskList
          tasks={this.state.tasks}
          onRemove={this.handleRemove.bind(this)}
          onToggleMarked={this.handleToggleMarked.bind(this)}
        />
        {/* If TaskList is emptye render this instead */}
        {this.state.tasks.length === 0 && (
          <StyledBanner theme="primary">
            Task list is empty. Lets add one!
          </StyledBanner>
        )}
      </StyledContainer>
    );
  }
}

export default TaskContainer;
