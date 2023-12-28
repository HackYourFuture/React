import { useState } from "react";
import ProductList from "../components/Products/ProductList";
import CategoryList from "../components/CategoryList";

const Home = () => {
  const [category, setCategory] = useState("");
  function toggleCategory(catVal) {
    setCategory((prevCat) => (prevCat === catVal ? "" : catVal));
  }

  return (
    <div>
      <h1>E-commerce App</h1>
      <h2>Products</h2>
      <main>
        <CategoryList selectedCategory={category} onToggle={toggleCategory} />
        <ProductList category={category} />
      </main>
    </div>
  );
};

export default Home;
