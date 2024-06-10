import React from 'react';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div class="category-list">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={category === activeCategory ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;