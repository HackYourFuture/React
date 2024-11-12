// CategoryList.jsx
import React from 'react';
import categories from '../fake-data/all-categories';

function CategoryList({ setActiveCategory }) {
  return (
    <nav style={{
      display: 'flex',
      gap: '15px',
      cursor: 'pointer',
      overflowX: 'auto',  // Makes it horizontally scrollable on smaller screens
    }}>
      {categories.map((category, index) => (
        <span
          key={index}
          onClick={() => setActiveCategory(category)}
          style={{
            padding: '8px 12px',
            textTransform: 'capitalize',
            color: '#333',
            borderBottom: '2px solid transparent',
            transition: '0.3s',
          }}
          onMouseOver={(e) => e.target.style.borderBottom = '2px solid #555'}
          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}
        >
          {category.replace('FAKE: ', '')}
        </span>
      ))}
    </nav>
  );
}

export default CategoryList;
