import React from 'react';



function DogPhoto({photosUrl}) {
    return (
        <div> 
        {photosUrl.map(photo =>{ 
            return <img src={photo}/>})}
        </div>
    )
}

export default DogPhoto
