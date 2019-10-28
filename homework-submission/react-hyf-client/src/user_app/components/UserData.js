import React, { useContext } from 'react';
import './UserData.css';
import UserDataItem from './UserDataItem';
import { UserContext } from '../contexts/UserContext';

const UserData = () => {
  const data = useContext(UserContext);
  const { gender, region, phone, birthday, email, password } = data[1];
  return (
    data[0].loading === false && (
      <ul className="UserData card-body list-group list-group-flush ">
        <UserDataItem
          icon={`fas fa-female ${gender === 'female' ? 'fa-female' : 'fa-male'}`}
          info={gender}
        />
        <UserDataItem icon={`fas fa-globe-asia`} info={region} />
        <UserDataItem icon={`fas fa-phone`} info={phone} />
        <UserDataItem icon={`fas fa-birthday-cake`} info={birthday.dmy} />
        <UserDataItem icon={`fas fa-envelope`} info={email} />
        <UserDataItem icon={`fas fa-key`} info={password} />
      </ul>
    )
  );
};

export default UserData;
