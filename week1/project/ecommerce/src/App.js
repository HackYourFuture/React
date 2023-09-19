import React, { useState } from "react";
import CategoryList from "./Component/CategoryList";
import ProductList from "./Component/ProductList";

import "./Component/CategoryList.css";
import "./Component/ProductList.css";
import "./Component/Cart.css";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <h1>Products</h1>
      <CategoryList onCategoryClick={handleCategoryClick} />
      <ProductList
        selectedCategory={selectedCategory}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
