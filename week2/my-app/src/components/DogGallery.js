/*
Exercise 2: Dog photo gallery

API endpoint: https://dog.ceo/api/breeds/image/random

Create 3 functional components: <DogGallery>, <DogPhoto> and <Button>

Inside <DogGallery> create a state variable called dogPhotos (initialize with value []) and state handler setDogPhotos

Inside (before the return statement) also create a function called getDogPhoto. The purpose of this function is to make an API call.
At the end of the function push the new dog image URL into the dogPhotos array state variable using setDogPhotos

Inside the <Button> component, create a <button> that has the text "Get a dog!" and onClick attribute
Pass down the function getDogPhoto to <Button>

Inside <DogGallery> return all the dogs stored in the dogPhotos array using the map() function. Pass down each dogPhoto into an instance of <DogPhoto>.

However, when there are no dogs in the array yet make sure to display the message "Get your first dog by clicking the button!"
*/

import React, { useState,useEffect }  from 'react';
import DogPhoto from './DogPhoto';
import DogButton from './DogButton';
const url='https://dog.ceo/api/breeds/image/random';

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    const [clickMessage, setClickMessage] = useState(true); 
    const [hasError, setError] = useState(false);

    const getDogPhoto = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            const imageURL = data.message;
            setDogPhotos([...dogPhotos, data.message])
            setLoading(false);
            setClickMessage(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        } 
    }
    
    function resetGallery() {
        setDogPhotos([]);
        setClickMessage(true);
    }

    return(
        <div className='dog-card'>
            <h1 className='friend-title'>Hi, Dog 🐶 </h1>
            {clickMessage && <h2 className='message'>Get your first dog by clicking the button!</h2> }
            <DogButton getDogPhoto={getDogPhoto} resetGallery={resetGallery} />
            {isLoading && <p>Loading ...</p> }
            <div className='gallery-container'>
                {dogPhotos.map((imageURL) => <DogPhoto imageURL={imageURL} />)}
            </div>
        </div>
    );
};

export default DogGallery

