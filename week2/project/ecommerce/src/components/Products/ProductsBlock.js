import { useState } from "react";
import ProductList from "./ProductList";
import CategoryList from "../CategoryList";

const ProductsBlock = () => {
  const [category, setCategory] = useState("");
  function toggleCategory(catVal) {
    setCategory((prevCat) => (prevCat === catVal ? "" : catVal));
  }

  return (
    <div>
      <h1>E-commerce App</h1>
      <main>
        <CategoryList selectedCategory={category} onToggle={toggleCategory} />
        <ProductList category={category} />
      </main>
    </div>
  );
};

export default ProductsBlock;
