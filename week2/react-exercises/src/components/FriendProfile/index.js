import React from "react";
import uuid from "uuid/v1";
import "./FriendProfile.css";

const FriendProfile = ({ friend }) => {
  const friends = friend.results;

  return friends.map(friend => (
    <div className="friend-info-box">
      <img
        className="f-image"
        src={friend.picture.large}
        alt={friend.name.first}
      />
      <ul key={friend.login.uuid} className="friend-info">
        <li key={uuid()}>{`${friend.name.first}  ${friend.name.last} `}</li>
        <li key={uuid()}>
          {friend.location.city}/{friend.location.state}/
          {friend.location.country}
        </li>
        <li key={uuid()}>{friend.email}</li>
        <li key={uuid()}>{friend.phone}</li>
      </ul>
    </div>
  ));
};

export default FriendProfile;
