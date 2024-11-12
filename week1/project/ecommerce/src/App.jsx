import React, { useState } from 'react'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import allProducts from './fake-data/all-products'
import allCategories from './fake-data/all-categories'

import './App.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? allProducts : allProducts.filter((product) => product.category === selectedCategory);
  return (
    <div className = 'app'>
      <h1> products</h1>
      <CategoryList
        categories={['All', ...allCategories]}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;

