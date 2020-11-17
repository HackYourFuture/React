import React from 'react'

const DogButton = ({ getDogPhoto, resetGallery }) => {
    return (
        <div className='dog-button-container'>
            <button className='button' onClick={() => getDogPhoto()}>Get a dog!</button>
            <button className='button' onClick={() => resetGallery()}>Reset Gallery</button>
        </div>
    )
}

export default DogButton;
