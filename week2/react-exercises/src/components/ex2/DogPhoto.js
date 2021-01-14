import React from 'react';

const DogPhoto = ({ src }) => {
  return (
    <img
      src={src}
      alt="doogy"
      style={{
        height: '30vh',
        maxWidth: '20vw',
        margin: '1rem',
      }}
    />
  );
};
export default DogPhoto;
