import React, { useState } from 'react';
import Button from './Button'
import Count from './Count'

const Counter = () => {
	const [ State, setCount ] = useState(0);

	return (
		<div>
			<Button Add1={() => setCount(State + 1)} />
			<Count CounState={State} />
		</div>
	);
};


export default Counter;