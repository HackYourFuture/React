import React from 'react';
import './UsersAvatar.css';

const UsersAvatar = ({ name, url }) => <img className="avatar" alt={name} src={url} />;

export default UsersAvatar;
