import React from 'react';
import Hobbies from './Hobbies';

const HobbiyList = () => {
	const hobbies = [ 'Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing' ];

	return (
		<ol>
			{hobbies.map((hobby) =>  (
				 <li >
					<Hobbies prop={hobby} />
				</li>
			))}
		</ol>
	);
};

export default HobbiyList;