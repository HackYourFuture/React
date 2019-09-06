import React from 'react';
import '../styles/profile-image.css';

const ProfileImage = ({ url }) => {
  return (
    <div className="profile-photo-div">
      <img src={url} alt="profile" className="profile-photo" />
    </div>
  );
};
export default ProfileImage;
