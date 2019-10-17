import React, { useContext } from 'react';
import './UserData.css';
import UserDataItem from './UserDataItem';
import { UserContext } from '../contexts/UserContext';

const UserData = () => {
  const data = useContext(UserContext);

  return (
    data[0].loading === false && (
      <ul className="UserData card-body list-group list-group-flush ">
        <UserDataItem
          icon={`fas fa-female ${data[1].gender === 'female' ? 'fa-female' : 'fa-male'}`}
          info={data[1].gender}
        />
        <UserDataItem icon={`fas fa-globe-asia`} info={data[1].region} />
        <UserDataItem icon={`fas fa-phone`} info={data[1].phone} />
        <UserDataItem icon={`fas fa-birthday-cake`} info={data[1].birthday.dmy} />
        <UserDataItem icon={`fas fa-envelope`} info={data[1].email} />
        <UserDataItem icon={`fas fa-key`} info={data[1].password} />
      </ul>
    )
  );
};

export default UserData;
