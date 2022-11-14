import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import productsData from "./fake-data/all-products";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const changeCategory = (newCategory) => {
    const newProductsData = productsData.filter(
      (category) => category.category === newCategory
    );
    setFilteredProducts(newProductsData);
  };

  return (
    <div>
      <Categories changeCategory={changeCategory} />
      <Products filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
