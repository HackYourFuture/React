import React from 'react';

export default function ProfileListItem(props) {
  return (
    <li className="profile__item">
      {props.icon} {props.text}
    </li>
  );
}
