import React from "react";

const FavContext = React.createContext({
  items: [],
  toggleFavProduct: (id) => {},
});

export default FavContext;
