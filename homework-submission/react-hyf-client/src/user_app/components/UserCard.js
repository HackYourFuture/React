import React, { useContext } from 'react';
import './UserCard.css';
import UserPhoto from './UserPhoto';
import UserName from './UserName';
import UserData from './UserData';
import { UserContext } from '../contexts/UserContext';
import Loader from './Loader';

const UserCard = () => {
  const data = useContext(UserContext);

  return data[0].loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="UserCard card mx-auto mb-3">
      <UserPhoto photo={data[1].photo} name={data[1].name + ' ' + data[1].surname} />
      <UserName info={data[1].name + ' ' + data[1].surname} />
      <UserData />
    </div>
  );
};

export default UserCard;
