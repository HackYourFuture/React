import React, { useState, useEffect } from 'react';
import DogPhoto from './DogPhoto'; 
import Button from './Button'


const url = "https://dog.ceo/api/breeds/image/random"; 


function DogGallery(){
  
    const [noPhotoYet, setNoPhotoYet] = useState(true);
    const [dogPhotos, setDogPhotos] = useState([]); 
    const [error, setError] = useState(false);

  
    const getDogPhoto = ()=> {
      fetch(url)
            .then(res => res.json())
            .then(data => {
              setNoPhotoYet(false)
              setDogPhotos(dogPhotos.concat(data.message))
            })
            .catch(err => {
              console.log("error", err);
              setError(true);
              setNoPhotoYet(false);
            });
    }
    return (
      <div>
        {error && <h1>Unable to fetch data</h1>}
        {noPhotoYet && <p>Press the button to get a cute doggy!</p> }
        <Button handleButton={getDogPhoto} text={"Get me a doggy please!!"}/> 
        <DogPhoto photosUrl={dogPhotos}/>
      </div>

    )
}


export default DogGallery; 