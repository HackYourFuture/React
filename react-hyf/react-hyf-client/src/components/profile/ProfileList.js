import React, { Fragment } from 'react';
import ListItem from './ProfileListItem';
import {
  IconCalendar,
  IconEarth,
  IconEnvelope,
  IconPhone,
  IconLocked
} from '../Icons';

export default function ProfileList({ person }) {
  return (
    <Fragment>
      <h1
        className={`profile__name ${
          person.gender === 'male' ? 'male' : 'female'
        }`}>
        {person.name} <br /> {person.surname}
      </h1>
      <ul className="profile__list">
        <ListItem icon={<IconEarth />} text={person.region} />
        <ListItem icon={<IconCalendar />} text={person.birthday.dmy} />
        <ListItem icon={<IconPhone />} text={person.phone} />
        <ListItem icon={<IconEnvelope />} text={person.email} />
        <ListItem icon={<IconLocked />} text={person.password} />
      </ul>
    </Fragment>
  );
}
