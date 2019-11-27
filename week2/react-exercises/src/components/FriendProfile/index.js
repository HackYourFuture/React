import React from "react";
import "./FriendProfile.css";

const FriendProfile = ({ friend }) => {
  console.log("f-profile", friend);
  const friends = friend.results;

  return friends.map(friend => (
    <div className="friend-info-box">
      <img
        className="f-image"
        src={friend.picture.large}
        alt={friend.name.first}
      />
      <ul key={friend.login.uuid} className="friend-info">
        <li>{`${friend.name.first}  ${friend.name.last} `}</li>
        <li>
          {friend.location.city}/{friend.location.state}/
          {friend.location.country}
        </li>
        <li>{friend.email}</li>
        <li>{friend.phone}</li>
      </ul>
    </div>
  ));
};

export default FriendProfile;
