import React from 'react';

function DogPhoto(props) {
  return (
    <div>
      <img
        src={props.data.map(photo => {
          return photo;
        })}
        alt="dog"
      />
    </div>
  );
}

export default DogPhoto;
