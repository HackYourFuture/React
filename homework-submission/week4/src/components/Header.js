import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Button, Grid, IconButton } from '@material-ui/core';
import { AuthContext } from '../context/AuthContext';
import { PowerSettingsNew } from '@material-ui/icons';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <Grid justify="space-between" alignItems="center" container>
          <Grid item>
            <Button color="inherit" component={Link} to={'/'}>
              HYF React
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to={'/week1'}>
              Week 1
            </Button>
            <Button color="inherit" component={Link} to={'/week2'}>
              Week 2
            </Button>
            <Button color="inherit" component={Link} to={'/week3'}>
              Week 3
            </Button>
            <Button color="inherit" component={Link} to={'/public'}>
              Public
            </Button>
          </Grid>
          {user.authenticated && (
            <Grid item>
              <IconButton
                edge="start"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={logout}
                color="inherit"
                aria-label="menu">
                <PowerSettingsNew />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
