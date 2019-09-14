import React, { Fragment } from 'react';
import ListItem from './ProfileListItem';
import { List, Typography } from '@material-ui/core';
import {
  CalendarToday,
  LanguageTwoTone,
  Mail,
  Phone,
  Lock
} from '@material-ui/icons';

const ProfileList = ({ person }) => {
  const color = person.gender === 'male' ? 'primary' : 'secondary';
  return (
    <Fragment>
      <Typography
        color={color}
        style={{ marginTop: '1rem' }}
        variant="h4"
        component="h3">
        {person.name} {person.surname}
      </Typography>
      <List>
        <ListItem
          icon={<LanguageTwoTone color={color} />}
          text={person.region}
        />
        <ListItem
          icon={<CalendarToday color={color} />}
          text={person.birthday.dmy}
        />
        <ListItem icon={<Phone color={color} />} text={person.phone} />
        <ListItem icon={<Mail color={color} />} text={person.email} />
        <ListItem icon={<Lock color={color} />} text={person.password} />
      </List>
    </Fragment>
  );
};

export default ProfileList;
