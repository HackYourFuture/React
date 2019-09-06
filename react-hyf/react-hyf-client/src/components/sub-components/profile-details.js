import React from 'react';
import '../styles/profile-details.css';

const ProfileDetails = ({ profile }) => {
  return (
    <ul className="details-list">
      <li key="1">
        <span>👤 {profile.gender}</span>
      </li>
      <li key="2">
        <span>🌐 {profile.region}</span>
      </li>
      <li key="3">
        <span>📞  {profile.phone}</span>
      </li>
      <li key="4">
        <span>🎂  {profile.birthday.mdy}</span>
      </li>
      <li key="5">
        <span>✉️  {profile.email}</span>
      </li>
      <li key="6">
        <span>🔑  {profile.password}</span>
      </li>
    </ul>
  );
};
export default ProfileDetails;
