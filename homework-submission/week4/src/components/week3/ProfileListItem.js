import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const ProfileListItem = ({ icon, text }) => (
  <ListItem>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText>{text}</ListItemText>
  </ListItem>
);

export default ProfileListItem;
