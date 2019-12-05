import React, { useState } from 'react'
import Button from './DogButton'
import DogPhoto from './DogPhoto'

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(false)

    async function getDogPhoto() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        if (response.ok) {
            const data = await response.json()
            const url = [...dogPhotos, data]
            setDogPhotos(url)
            setLoading(true)
            setImage(true)
        } else {
            throw new Error("Photo loading failed.")
        }
    }

    return (
        <div className="dogGallery">
            {image === false && <h2 className="notes"> Get your first dog by clicking the button! </h2>}
            <Button onClick={() => getDogPhoto()} />
            <div className="imgList">
                {loading === true && dogPhotos.map(img => <DogPhoto url={img.message} />)}
            </div>
        </div>
    )

}

export default DogGallery