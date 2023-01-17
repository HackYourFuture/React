import React, { useState, useEffect } from 'react';
import './Categories.css'

const Categories = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories()
  }, []);
  return (
    <div className='category'>
      {categories.map((category, index) => {
        return <button key={index} onClick={handleClick}>{category}</button>
      })}
    </div>
  )
}

export default Categories;
