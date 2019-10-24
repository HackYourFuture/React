import React from 'react';
import './style.css';

function ProfilPicture({ user }) {
  const { photo, name } = user;
  return <img src={photo} alt={name} />;
}

export default ProfilPicture;
