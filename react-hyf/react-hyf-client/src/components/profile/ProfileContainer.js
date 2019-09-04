import React from 'react';
import ProfileList from './ProfileList';
import ProfileImage from './ProfileImage';

function ProfileContainer({ person }) {
  return (
    <div className="profile">
      <ProfileImage person={person} />
      <ProfileList person={person} />
    </div>
  );
}

export default ProfileContainer;
