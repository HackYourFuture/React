import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import FavContext from "../context/fav-context";
import Navbar from "../components/Navbar";
import FavList from "../components/Products/FavList";

const FavoritesPage = () => {
  const { items } = useContext(FavContext);
  //console.log("run");
  const favListHasItems = items.length > 0;
  const { data, loading, error } = useFetch({
    url: "https://fakestoreapi.com/products",
    noFavItems: !favListHasItems,
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  let content = <h2>Your favorite list is empty!</h2>;

  if (favListHasItems) {
    const favProducts = data.filter((product) => items.includes(product.id));
    content = <FavList products={favProducts} />;
  }

  return (
    <main>
      <Navbar title="Favorites" />
      {content}
    </main>
  );
};

export default FavoritesPage;
