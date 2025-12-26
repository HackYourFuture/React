import { useState } from "react";
import products from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

const normalizeCategory = (value) =>
  value.toLowerCase().replace("fake:", "").replaceAll("'", "").trim();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
const filteredProducts = selectedCategory
  ? products.filter((product) => {
      const normalizedSelected = normalizeCategory(selectedCategory);

    
      const productCategories = [];

      if (Array.isArray(product.categories)) {
        productCategories.push(...product.categories);
      }

      if (product.category) {
        productCategories.push(product.category);
      }

      return productCategories
        .map((cat) => normalizeCategory(cat))
        .includes(normalizedSelected);
    })
  : products;


  return (
    <div className="container">
      <h1 className="page-title">Products</h1>

      <CategoryList
        categories={categories}
        selected={selectedCategory}
        onSelect={handleSelectCategory}   
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
