import { useState } from "react";
import ProductList from "./components/Products/ProductList";
import CategoryList from "../src/components/CategoryList";
import productsData from "./all-products";
import categoriesData from "./all-categories";
import "../src/App.css";

const App = () => {
  const [category, setCategory] = useState("");

  const toggleCategory = (value) => {
    setCategory(category === value ? "" : value);
  };

  let products = productsData;
  if (category !== "") {
    products = productsData.filter((product) => {
      return `FAKE: ${product.category}` === category;
    });
  }

  return (
    <div>
      <h1>E-commerce App</h1>
      <main>
        <CategoryList
          categories={categoriesData}
          selectedCategory={category}
          onToggle={toggleCategory}
        />
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;
