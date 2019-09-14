import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

const Welcome = ({ user, logout }) => {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center">
      <Typography
        style={{ textTransform: 'uppercase', marginBottom: '2rem' }}
        align="center"
        variant="h3">
        Welcome, {user.username}!
      </Typography>
      <Grid container alignItems="stretch" justify="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Button
            component={Link}
            to="/week1"
            style={{ height: '30vh', textAlign: 'center' }}
            fullWidth
            size="large"
            variant="outlined"
            color="secondary">
            Week 1 <br /> Todo Lists
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            component={Link}
            to="/week2"
            style={{ height: '30vh', textAlign: 'center' }}
            fullWidth
            size="large"
            variant="outlined"
            color="secondary">
            Week 2 <br /> Task App
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            component={Link}
            to="/week3"
            style={{ height: '30vh', textAlign: 'center' }}
            fullWidth
            size="large"
            variant="outlined"
            color="secondary">
            Week 3 <br /> UI Names App
          </Button>
        </Grid>
      </Grid>
      <Button
        style={{ marginTop: '1rem' }}
        size="large"
        variant="contained"
        color="secondary"
        onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
};

export default Welcome;
