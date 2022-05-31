import './App.css';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import { useState } from 'react'



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [activeCategory, setActiveCategory] = useState();


  const onSelectCategory = (categoryName) => {
    const currentCategory = categoryName.replace("FAKE: ", "");
    setSelectedCategory(currentCategory);
    setActiveCategory(categoryName);
  };


  return (
    <div className='app'>
      <header>
        <h1>Products</h1>
        <CategoryList onSelectCategory={onSelectCategory} activeCategory={activeCategory} />
      </header>
      <main>
        <ProductList selectedCategory={selectedCategory} />
      </main>
    </div>
  )
}

export default App