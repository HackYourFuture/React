// src/components/CategoryList.jsx
import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} onClick={() => { 
          console.log("Category clicked: ", category); // Tıklanan kategoriyi kontrol edelim
          onCategoryClick(category); 
        }}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
