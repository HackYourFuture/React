import React, { useState, useCallback } from "react";
import Button from "../Button";
import DogPhoto from "../DogPhoto";
import Error from "../Error";
import uuid from "uuid/v1";
import "./DogGallery.css";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [status, setStatus] = useState("Loading");
  const [errorMessage, setErrorMessage] = useState("");
  const DOG_PHOTO_API = `https://dog.ceo/api/breeds/image/random`;

  async function getDogPhoto(API) {
    try {
      const res = await fetch(API);
      if (!res.ok) {
        throw Error("An Error occured while loading the data");
      }
      const newDog = await res.json();
      const newDogList = dogPhotos.concat(newDog);
      setDogPhotos(newDogList);
      setStatus("Success");
    } catch (error) {
      if (error) {
        setStatus("Error");
        setErrorMessage(error.message);
      }
    }
  }

  const getPhotoWhenClicked = useCallback(() => {
    return getDogPhoto(DOG_PHOTO_API);
  }, [dogPhotos]);

  return (
    <div className="ex-2">
      <Button
        text="Get a dog!"
        fetchData={() => getPhotoWhenClicked(DOG_PHOTO_API)}
      />
      {status === "Loading" && (
        <p>Get your first dog by clicking the button!</p>
      )}
      {status === "Success" &&
        dogPhotos.map(photo => <DogPhoto dogPhoto={photo} key={uuid()} />)}
      {status === "Error" && <Error text={errorMessage} />}
    </div>
  );
};

export default DogGallery;
