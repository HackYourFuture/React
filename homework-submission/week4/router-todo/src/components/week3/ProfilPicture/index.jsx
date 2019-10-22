import React from 'react';
import './style.css';

function ProfilPicture({ userValues }) {
  return <img src={userValues[11]} alt={userValues[0]} />;
}

export default ProfilPicture;
