import { useState } from 'react'
import './App.css'
import categories from './fake-data/all-categories.js'
import products from './fake-data/all-products.js'
import Categories from './categories.jsx'
import Products from './products.jsx'



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => {
      return `FAKE: ${product.category}` === selectedCategory})
    : products;
  

  return (
    <>
      <div>
        <h1>PRODUCTS</h1>
      </div>
      <div className='app'>
        <Categories categories={categories} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
        <Products products={filteredProducts} />
      </div>
    </>
  )
}

export default App
