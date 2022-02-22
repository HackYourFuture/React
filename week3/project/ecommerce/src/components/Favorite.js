import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Favorite = ({ item }) => {
  return (
    <div className="product">
      <div>
        <AiFillHeart />
        {item}
      </div>
      {/* <div className="image">
        <img src={item.image} alt="product" />
      </div>

      <div className="description">
        <h3>{item.title}</h3>
      </div> */}
    </div>
  );
};

export default Favorite;
