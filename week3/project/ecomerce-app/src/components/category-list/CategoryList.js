import React from 'react';
import './categoryList.css';

function CategoryList({ categories, activeCategory, onCategoryClick }) {
  return (
    <div>
      <div className="category__list">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? 'active' : ''}
            key={category}
            category={category}
            onClick={() => onCategoryClick(category)}
          >
            {category.replace('FAKE: ', '')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
