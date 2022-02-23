import React, { useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";

const FavoritesController = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  console.log("controller#######", favorites);
  return (
    <div className="productList">
      {favorites.map((item) => {
        return (
          <Link key={item.id} to={`/product/${item.id}`}>
            <Favorite key={item.id} item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default FavoritesController;
