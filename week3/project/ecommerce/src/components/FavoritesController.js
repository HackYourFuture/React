import React, { useContext } from "react";
import { FavoritesContext } from "./context/FavoritesContext";
import Favorite from "./Favorite";

const FavoritesController = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);
  console.log("controller#######", favorites);
  return (
    <div>
      {favorites.map((item) => {
        return <Favorite item={item} />;
      })}
    </div>
  );
};

export default FavoritesController;
