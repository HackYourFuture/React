import React, { useState } from 'react';

import TaskAddForm from '../components/week2/TaskAddForm';
import TaskList from '../components/week2/TaskList';
import { Card, CardHeader, CardContent, Grid, Box } from '@material-ui/core';

const tasks = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

const Week2 = () => {
  const [state, setState] = useState(() => ({
    tasks: tasks,
    lastId: tasks.length
  }));

  const handleAdd = (description, deadline) => {
    // I any field is empty, alert user without adding the task
    if (description === '' || deadline === '')
      return alert('Please fill all the fields!');

    let lastId = state.lastId;
    const newTask = {
      id: ++lastId,
      description,
      deadline,
      done: false
    };

    setState({ tasks: [...state.tasks, newTask], lastId });
  };

  const handleRemove = id => {
    const filteredTasks = state.tasks.filter(task => task.id !== id);
    setState({ tasks: filteredTasks });
  };

  const handleToggleMarked = id => {
    const tasks = [...state.tasks];
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    setState({ ...state, tasks });
  };

  return (
    <Grid style={{ height: '100%' }} container justify="center">
      <Grid item md={6} sm={8} xs={12}>
        <Card>
          <CardContent>
            <Box textAlign="center" paddingBottom={1}>
              <CardHeader title="React Task App" />
            </Box>
            <TaskAddForm onAdd={handleAdd} />
            <TaskList
              tasks={state.tasks}
              onRemove={handleRemove}
              onToggleMarked={handleToggleMarked}
            />
            {state.tasks.length === 0 && (
              <div>Task list is empty. Lets add one!</div>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Week2;
