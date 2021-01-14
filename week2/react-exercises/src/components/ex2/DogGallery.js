import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://dog.ceo/api/breeds/image/random';

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const getDogPhoto = () => {
    setIsLoading(true);
    console.log('sending http request...');
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          isLoading(false);
          throw new Error('Failed to fetch..');
        }
        return res.json();
      })
      .then((data) => {
        setDogPhotos((prevPhotos) => [...prevPhotos, data.message]);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        borderTopStyle: 'dashed',
        borderTopColor: 'black',
        marginTop: '1rem',
      }}
    >
      {isLoading && <p>Loading...</p>}
      {hasError && <p>something went wrong</p>}
      <div>
        {dogPhotos.length > 0 &&
          dogPhotos.map((photo) => {
            return <DogPhoto src={photo} key={uuidv4()} />;
          })}
        {dogPhotos.length === 0 && (
          <p>Get your first dog by clicking the button!</p>
        )}
      </div>
      <Button getDogPhoto={getDogPhoto} />
    </div>
  );
};
export default DogGallery;
