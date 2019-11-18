import React from "react";
import "./Guarantee.css";

const Guarantee = props => {
  const { title, image, imgName, description } = props;
  return (
    <div className="guarantee-cards">
      <img className="icons" src={image} alt={imgName} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
