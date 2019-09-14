import React, { useState } from 'react';
import { TextField, Fab, Grid, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const TaskAddForm = props => {
  const [state, setState] = useState({
    description: '',
    deadline: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    props.onAdd(description, deadline);
  };

  const handleChange = e => {
    const target = e.target;
    if (target.name === 'description') setState({ description: target.value });
    if (target.name === 'deadline') setState({ deadline: target.value });
  };

  return (
    <form name="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            fullWidth
            name="description"
            variant="outlined"
            label="Description"
            value={state.description || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            type="date"
            name="deadline"
            variant="outlined"
            label="Deadline"
            value={state.deadline || new Date().toISOString().substr(0, 10)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Box textAlign="center" width="100%">
            <Fab size="large" type="submit" color="primary">
              <Add />
            </Fab>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskAddForm;
