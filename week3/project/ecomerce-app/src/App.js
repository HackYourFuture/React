import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/category-list/CategoryList';
import ProductList from './components/product-list/ProductList';
import ProductDetail from './components/productDetail/ProductDetail';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('Error fetching categories:', error));

    // Fetch products
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  function filterProductsByCategory(category) {
    setActiveCategory(category);
    if (category === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.category.replace('FAKE: ', '') ===
          category.replace('FAKE: ', '')
      );
      setFilteredProducts(filtered);
    }
  }

  return (
    <Router>
      <div className="App">
        <h1>Product Catalog</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );

  function Home() {
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <CategoryList
              categories={categories}
              activeCategory={activeCategory}
              onCategoryClick={filterProductsByCategory}
            />
            <ProductList products={filteredProducts} />
          </>
        )}
      </>
    );
  }
}

export default App;
