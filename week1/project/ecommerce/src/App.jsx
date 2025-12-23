import { useState } from 'react'
import './index.css'
import allProducts from './fake-data/all-products'
import allCategories from './fake-data/all-categories'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Normalization logic: remove "FAKE: " prefix, lowercase, trim
  const normalize = (str) => {
    if (!str) return ''
    return str.replace(/FAKE:\s*/i, "").trim().toLowerCase()
  }

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => normalize(product.category) === normalize(selectedCategory))
    : allProducts

  return (
    <div className="app-container">
      <header className="header">
        <h1>My E-commerce</h1>
        <CategoryList
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </header>

      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
