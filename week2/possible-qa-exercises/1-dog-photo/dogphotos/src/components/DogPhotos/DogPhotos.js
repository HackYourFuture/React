import React from 'react';
import "./DogPhotos.css";

const DogPhotos = ({ dogPhotos }) => {
  return (
    <div className='dogPhotos'>
      {dogPhotos.length !== 0 ? dogPhotos.map((dogPhoto, index) => {
        return <img src={dogPhoto} alt="dog" key={index}></img>
      }) : <h1> empty</h1>}
    </div >
  )
}

export default DogPhotos
