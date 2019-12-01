import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import DogPhoto from './DogPhoto';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPhoto, setShowPhoto] = useState(true);

  async function getDogPhoto() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    // const arrayJson = await new Array(json);
    // console.log(arrayJson);

    setDogPhotos(json);
    setLoading(false);
    setShowPhoto(false);
  }

  return (
    <div>
      <Button clickHere={() => getDogPhoto()} buttonText="Get a dog" />
      {showPhoto && <h2>Get your first dog by clicking the button!</h2>}
      {loading === false && <DogPhoto dogName={dogPhotos.message} />}
    </div>
  );
}

export default DogGallery;
