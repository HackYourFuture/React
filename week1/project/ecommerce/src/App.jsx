import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import products from './extract-categories';
import categories from  './fake-data/all-categories';

const App = () => {
  const allCategories = categories;

  const [activeCategory, setActiveCategory] = useState('');

  const filteredProducts = activeCategory === ''
    ? products
    : products.filter(product => product.category === activeCategory.replace('FAKE: ', ''));

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory('');
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList
        categories={allCategories}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryClick}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;