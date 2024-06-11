import { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function Home({ setActiveProductInfo }) {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <>
      <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <ProductList activeCategory={activeCategory} setActiveProductInfo={setActiveProductInfo}/>
    </>
  )
};

export default Home;