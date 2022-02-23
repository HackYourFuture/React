import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";

const Product = ({ product }) => {
  const [isfavorite, setIsFavorite] = useState(true);
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const addFavorites = (e) => {
    e.preventDefault();
    setIsFavorite(!isfavorite);

    const favorite = {
      id: product.id,
      title: product.title,
      image: product.image,
    };
    const found = favorites.some((el) => el.id === product.id);
    if (!found) {
      setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    } else {
      const itemRemoved = favorites.filter((el) => el.id !== product.id);
      setFavorites(itemRemoved);
    }
    console.log("favorites List", favorites);
  };
  return (
    <div className="product">
      <div className="favoriteIcon" onClick={addFavorites}>
        {isfavorite ? <AiOutlineHeart /> : <AiFillHeart />}
      </div>
      <div className="image">
        <img src={product.image} alt="product" />
      </div>

      <div className="description">
        <h3>{product.title}</h3>
      </div>
    </div>
  );
};

export default Product;
