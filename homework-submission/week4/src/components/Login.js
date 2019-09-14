import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Typography
} from '@material-ui/core';

const Login = ({ user, login }) => {
  const [state, setState] = useState({ username: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    user.username === state.username &&
      user.password === state.password &&
      login();
  }

  function handleChange(e) {
    setState({ ...state, [e.target.id]: e.target.value });
  }

  return (
    <Grid container justify="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <TextField
              fullWidth
              onChange={handleChange}
              margin="normal"
              id="username"
              label="Username"
              variant="outlined"
              required
              autoComplete="username"
            />
            <TextField
              fullWidth
              onChange={handleChange}
              margin="normal"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              required
              autoComplete="password"
            />
            <Button
              style={{ padding: '14px 0', marginTop: '14px' }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit">
              Login
            </Button>
          </CardContent>
        </Card>
      </form>
      <Typography
        style={{ position: 'absolute', bottom: '1rem' }}
        variant="body2">
        * username: hyf | password: hyf
      </Typography>
    </Grid>
  );
};

export default Login;
