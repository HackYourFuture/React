import React from "react";

const Img = ({ imgSrc, imgAlt }) => (
  <li className="img">
    <img src={imgSrc} alt={imgAlt} />
  </li>
);

export default Img;
