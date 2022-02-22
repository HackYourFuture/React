import React, { useState } from "react";

export const FavoritesContext = React.createContext();

export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
