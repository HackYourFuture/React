import { useReducer } from "react";
import { favReducer, defaultFavState } from "./fav-reducer";
import FavContext from "./fav-context";

const FavoritesProvider = ({ children }) => {
  const [favState, dispatch] = useReducer(favReducer, defaultFavState);
  //console.log(favState);
  const toggleFavProduct = (id) => {
    dispatch({ type: "TOGGLE_FAV", id });
  };

  const favCtx = { items: favState.items, toggleFavProduct };

  return <FavContext.Provider value={favCtx}>{children}</FavContext.Provider>;
};

export default FavoritesProvider;
