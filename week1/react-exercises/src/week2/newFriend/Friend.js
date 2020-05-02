import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(async () => {
		const response = await fetch(url);
		const data = await response.json();
		const [ item ] = data.results;
		setData(item);
		setLoading(false);
	}, []);

	return { data, loading };
};

export default () => {
	const [ count, setCount ] = useState(0);
	const { data, loading } = useFetch('https://api.randomuser.me/');

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			{loading ? <div>...loading</div> : <div>{data.name.first}</div>}
		</div>
	);
};
