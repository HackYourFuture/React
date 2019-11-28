import React from "react";
import uuid from "uuid/v1";
import "./DogPhoto.css";

const DogPhoto = ({ dogPhoto }) => {
  return (
    <img
      className="dog-img"
      src={dogPhoto.message}
      alt={dogPhoto.message}
      id={uuid()}
    />
  );
};

export default DogPhoto;
