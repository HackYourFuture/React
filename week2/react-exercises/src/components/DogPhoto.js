import React from 'react';

function DogPhotos(props) {
  return (
    <div className="dog-main">
      <img alt={'photo-1'} src={props.dogName} />
    </div>
  );
}

export default DogPhotos;
