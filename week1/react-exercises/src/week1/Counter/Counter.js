import React, { useState } from 'react';
import Button from './Button';
function Counter() {
	const [ count, handleCount ] = useState(0);
	function handleInc() {
		handleCount(count + 1);
	}
	function handleDes() {
		handleCount(count - 1);
	}
	const feedback = count > 10 ? <p>It's higher than 10!</p> : <p>Keep counting ...</p>;
	return (
		<div>
			<Button text="Add 1!" handleOnClick={handleInc} />
			<Button text="Minus 1!" handleOnClick={handleDes} />
			<h3>Count : {count} </h3>
			<div>{feedback}</div>
		</div>
	);
}
export default Counter;
