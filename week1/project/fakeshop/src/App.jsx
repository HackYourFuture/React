import React, { useState } from 'react';
import CategoryList from './components/CategoryList.jsx'; // Kategori Listesi bileşeni
import ProductList from './components/ProductList.jsx'; // Ürün Listesi bileşeni

import categoriesData from './fake-data/all-categories.js';  // Kategorileri dışarıdan alıyoruz
import productsData from './fake-data/all-products.js';      // Ürünleri dışarıdan alıyoruz

const App = () => {
  const [categories] = useState(categoriesData); // Kategoriler state'ini kuruyoruz
  const [products] = useState(productsData);     // Ürünler state'ini kuruyoruz
  const [selectedCategory, setSelectedCategory] = useState(null); // Başlangıçta kategori seçilmemiş

  // Kategori seçildiğinde ürünleri filtrele
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);  // Kategori seçildiğinde selectedCategory state'ini güncelleriz
  };

  // Eğer kategori seçilmişse, o kategoriye ait ürünleri filtreliyoruz
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : []; // Kategori seçilmemişse, tüm ürünler gösterilir

  return (
    <div className="app">
      <h1>Store</h1>
      <div className="main-container">
        {/* Kategori Listesi Bileşenini render ediyoruz */}
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
        {/* Ürün Listesini render ediyoruz, filtrelenmiş ürünleri geçiriyoruz */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
