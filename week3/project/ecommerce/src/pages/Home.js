import { useState } from "react";

import ProductList from "../components/Products/ProductList";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";

const Home = () => {
  const [category, setCategory] = useState("");
  function toggleCategory(catVal) {
    setCategory((prevCat) => (prevCat === catVal ? "" : catVal));
  }

  return (
    <div>
      <Navbar title="products" />

      <main>
        <CategoryList selectedCategory={category} onToggle={toggleCategory} />
        <ProductList category={category} />
      </main>
    </div>
  );
};

export default Home;
