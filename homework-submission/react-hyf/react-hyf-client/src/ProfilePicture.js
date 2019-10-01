import React from 'react';

const ProfilePicture = image => {
  console.log(image);
  return (
    <div>
      <img src={image.image} alt='profile'></img>
    </div>
  );
};

export default ProfilePicture;
