import React, { useState, useEffect } from 'react';
const Friend = () => {
	const [ friend, setFriend ] = useState({});
	function fetchData() {
		fetch('https://www.randomuser.me/api?results=1')
			.then((res) => res.json())
			.then((data) => setFriend(data.results[0]));
		console.log(friend);
	}
	useEffect(() => {
		try {
			fetchData();
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<div>
			<button onClick={fetchData}>Get a friend!</button>
			{Object.keys(friend).length > 0 ? (
				<ul>
					<li>Name : {friend.name.first + '  ' + friend.name.last}</li>
					<li>
						Adr :
						{friend.location.street.number +
							'  ' +
							friend.location.street.name +
							' , ' +
							friend.location.city}
					</li>
					<li>Country : {friend.location.country}</li>

					<li>Email : {friend.email}</li>
					<li>Phone : {friend.phone}</li>
				</ul>
			) : (
				<span>error</span>
			)}
		</div>
	);
};
export default Friend;
