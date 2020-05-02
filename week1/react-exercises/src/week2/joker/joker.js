import React, { useState, useEffect } from 'react';

const RandomJoke = () => {
	const [ hasError, setErrors ] = useState(false);
	const [ joke, setJoke ] = useState({});

	async function fetchData() {
		const res = await fetch('https://official-joke-api.appspot.com/random_joke');
		res.json().then((res) => setJoke(res)).catch((err) => setErrors(err));
	}

	useEffect(() => {
		fetchData();
	}, []);

	const sucsees = (
		<div>
			<p>{joke.setup}</p>
			<p>{joke.punchline}</p>
		</div>
	);

	return <div>{hasError ? <span>Error </span> : sucsees} </div>;
};
export default RandomJoke;
