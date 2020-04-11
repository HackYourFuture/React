import React, { useState, useEffect } from 'react';

const DogGallery = () => {
	const [ hasError, setErrors ] = useState(false);
	const [ dogPhoto, setDogPhoto ] = useState({});

	async function getDogPhoto() {
		const res = await fetch('https://dog.ceo/api/breeds/image/random');
		res.json().then((res) => setDogPhoto(res.message)).catch((err) => setErrors(err));
	}

	useEffect(() => {
		getDogPhoto();
	}, []);

	return (
		<div className="dogPhoto">
			<button onClick={getDogPhoto}>Get a dog!</button>
			<hr />
			{hasError ? (
				<span>Has error: {JSON.stringify(hasError)}</span>
			) : (
				<img src={dogPhoto} alt="dogPhoto" width=" 300px" height="200px" />
			)}
		</div>
	);
};
export default DogGallery;
