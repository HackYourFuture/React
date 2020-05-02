import React from 'react';

const FriendProfile = ({ friend }) => {
	return (
		<div className="friendProfile" style={{ border: '1px solid black', width: '300px' }}>
			<ul style={{ listStyle: 'none' }}>
				<li>
					Name: {friend.name.first} {friend.name.last}
				</li>
				<li>Adr: {friend.location.street.name}</li>
				<li>Country : {friend.location.country}</li>
				<li>Email: {friend.email}</li>
				<li>phone: {friend.phone}</li>
			</ul>
			<img src={friend.picture.thumbnail} alt="pic" />
		</div>
	);
};

export default FriendProfile;
