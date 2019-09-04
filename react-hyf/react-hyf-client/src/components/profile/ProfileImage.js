import React from 'react';

export default function ProfileImage({ person }) {
  return (
    <div className='profile__image-wrapper'>
      <div
        style={{ top: '1rem', right: '1rem' }}
        className='profile__badge-wrapper'>
        <div
          className={`profile__badge ${
            person.gender === 'male' ? 'male' : 'female'
          }`}>
          {person.age}
        </div>
      </div>
      <img className='profile__image' src={person.photo} alt='person' />
    </div>
  );
}
