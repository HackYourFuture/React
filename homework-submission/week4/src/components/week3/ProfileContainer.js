import React from 'react';
import { Card, CardMedia, CardContent, Grid } from '@material-ui/core';
import ProfileList from './ProfileList';

const ProfileContainer = ({ person }) => {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            style={{ height: '100%' }}
            image={person.photo}
            title={person.name}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <ProfileList person={person} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileContainer;
