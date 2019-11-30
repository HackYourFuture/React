import React, { useState } from 'react';
import axios from 'axios';
import DogPhoto from './DogPhoto';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhotos = async () => {
    const result = await axios.get('https://dog.ceo/api/breeds/image/random');
    const photo = await result.message;
    console.log(photo);
    return photo;
  };

  const handleClick = async e => {
    e.preventDefault();
    const photo = await getDogPhotos();
    await setDogPhotos([photo]);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Your First Dog</button>
      {dogPhotos.length > 0 ? <DogPhoto data={dogPhotos} /> : <h4>Click Button</h4>}
    </div>
  );
}

export default DogGallery;
