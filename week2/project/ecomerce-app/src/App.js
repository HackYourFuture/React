import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryList from '../src/components/category-list/CategoryList';
import ProductList from '../src/components/product-list/ProductList';
import ProductDetail from '../src/components/productDetail/ProductDetail';
// import LoadingIndicator from '../src/components/loading-indicator/LoadingIndicator';
// import ErrorIndicator from '../src/components/error-indicator/ErrorIndicator';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err);
    }
  };

  const fetchProducts = async (category = null) => {
    setLoading(true);
    try {
      let endpoint = 'https://fakestoreapi.com/products';
      if (category) {
        endpoint = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await fetch(endpoint);
      const data = await response.json();
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Product Catalog</h1>
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={(category) => {
            setActiveCategory(category);
            fetchProducts(category);
          }}
    />
      </div>
    </Router>
  );
}

export default App;
