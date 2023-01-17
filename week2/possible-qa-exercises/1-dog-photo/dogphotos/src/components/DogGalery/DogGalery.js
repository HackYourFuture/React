import React, { useEffect, useState } from 'react';
import "./DogGalery.css";
import DogPhotos from '../DogPhotos/DogPhotos';
import Button from "../Button/Button"

const DogGalery = () => {
  const [dogPhotos, setdogPhotos] = useState([]);

  const getDogPhoto = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    setdogPhotos(prev => [...prev, data.message]);
  }


  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      <DogPhotos dogPhotos={dogPhotos} />
    </div>
  )
}

export default DogGalery
