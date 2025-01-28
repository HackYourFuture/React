import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import allCategories from "./fake-data/all-categories.js";
import products from "./fake-data/all-products.js";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  function normalizeCategory(category) {
    return category.replace("FAKE: ", "").trim().toLowerCase();
  }

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (product) =>
            normalizeCategory(product.category) ===
            normalizeCategory(activeCategory)
        );

  return (
    <div>
      <Header />
      <main>
        <FilteredCategories
          allCategories={allCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Products</h1>
    </header>
  );
}

function FilteredCategories({
  allCategories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="category-container">
      <ul>
        {allCategories.map((category, index) => (
          <li
            key={index}
            className={activeCategory === category ? "active-category" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

FilteredCategories.propTypes = {
  allCategories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

function ProductList({ products }) {
  return (
    <section className="product-container">
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

function ProductItem({ product }) {
  return (
    <li className="product--item">
      <img src={product.image} alt={product.title} className="product--image" />
      <div className="product--title">{product.title}</div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
