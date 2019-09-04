import React from 'react';
import TaskItem from './TaskItem';
import { StyledTitle, StyledText } from '../styled';

const TaskList = props => {
  const sortedTasks = props.tasks.sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );
  const totalTasks = props.tasks.length;
  const totalCompletedTasks = sortedTasks.filter(task => task.done).length;
  const unCompletedTasks = props.tasks.filter(task => !task.done);
  const completedTasks = props.tasks.filter(task => task.done);

  return (
    <React.Fragment>
      <StyledTitle>
        Sorted Task List
        <StyledText small>
          ({totalCompletedTasks + '/' + totalTasks})
        </StyledText>
      </StyledTitle>
      <nav>
        {completedTasks.map(task => (
          <TaskItem key={task.id} task={task} {...props} />
        ))}
        {unCompletedTasks.map(task => (
          <TaskItem key={task.id} task={task} {...props} />
        ))}
      </nav>
    </React.Fragment>
  );
};

export default TaskList;
