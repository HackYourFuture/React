import React from 'react';

import TaskItem from './TaskItem';
import { List } from '@material-ui/core';

const TaskList = props => {
  const unCompletedTasks = props.tasks.filter(task => !task.done);
  const completedTasks = props.tasks.filter(task => task.done);

  return (
    <List>
      {completedTasks.map(task => (
        <TaskItem key={task.id} task={task} {...props} />
      ))}
      {unCompletedTasks.map(task => (
        <TaskItem key={task.id} task={task} {...props} />
      ))}
    </List>
  );
};

export default TaskList;
