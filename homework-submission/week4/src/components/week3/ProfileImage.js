import React from 'react';

const ProfileImage = ({ person }) => (
  <div>
    <div>
      <div className={person.gender === 'male' ? 'male' : 'female'}>
        {person.age}
      </div>
    </div>
    <img src={person.photo} alt="person" />
  </div>
);

export default ProfileImage;
