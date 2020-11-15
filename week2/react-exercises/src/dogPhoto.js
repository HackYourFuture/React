import React, {useState} from 'react';

export const DogGallery = () => {
  const [dogPhots, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDogPhoto = () => {
    setLoading(true);
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then (data => setDogPhotos([...dogPhots,data.message]))
    .catch(error => setError(true))
    .finally(setLoading(false));
  }
  return(
    <>
    <Button getDogPhoto={getDogPhoto}/>
    <DogPhoto dogPhots={dogPhots} error={error} loading={loading}/>
    </>
  )
}

 const DogPhoto = ({dogPhots, error, loading}) => {
 return(
  <div className = "gallery">
   {loading && <p>is loading...</p>}
   {error && <p>There is an Error</p>}
   {!error && dogPhots.map(imgUrl => {
     return <img className="dogos" src ={imgUrl} alt={"photoofdog"}/>
   })}
   </div>
 );
}

 const Button = ({getDogPhoto}) => {
  return(
   <button onClick={getDogPhoto}>Get a dog!</button>
  )
}


export default DogGallery;


