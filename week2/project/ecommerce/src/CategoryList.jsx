import { useEffect, useState } from 'react';
import Category from './Category';

export default function CategoryList({ setActiveCategory, activeCategory }) {
  const [categoryList, setCategoryList] = useState(null);

  const getCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const result = await response.json();
      setCategoryList(result);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const listItems = categoryList?.map(category =>
    <Category 
    setActiveCategory={setActiveCategory} 
    category={category} 
    activeCategory={activeCategory} 
    key={category} /> 
  );
  
  return <ul className='category-list'>{listItems}</ul>;
}