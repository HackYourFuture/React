import React, {useState} from 'react'

function DogGallery(){
    const {dogPhotos, setDogPhotos} = useState([])


    async function getDogPhoto(){
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
 
    }
    
    return(
        <div>

        </div>
    )

}

export default DogGallery