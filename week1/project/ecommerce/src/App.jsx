import { useState } from "react";
import products from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

const normalizeCategory = (value) =>
  value
    .toLowerCase()
    .replace("fake:", "")
    .replaceAll("'", "")
    .trim();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

const filteredProducts = selectedCategory
  ? products.filter((product) =>
      product.categories.some(
        (cat) => normalizeCategory(cat) === normalizeCategory(selectedCategory)
      )
    )
  : products;

 return (
  <div className="container">
    <h1 className="page-title">Products</h1>

    <CategoryList
      categories={categories}
      selected={selectedCategory}
      onSelect={setSelectedCategory}
    />

    <ProductList products={filteredProducts} />
  </div>
);
}

export default App;
