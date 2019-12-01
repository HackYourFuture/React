import React from 'react'

function DogPhoto(props) {
    return (
        <div className="dogPhotos">
            <img src={props.url} alt="dog" />
        </div >
    )
}

export default DogPhoto