import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Products</h1>
        <CategoryList setActiveCategory={setActiveCategory} />
      </header>
      <main className="content">
        <ProductList activeCategory={activeCategory} />
      </main>
    </div>
  );
}

export default App;
