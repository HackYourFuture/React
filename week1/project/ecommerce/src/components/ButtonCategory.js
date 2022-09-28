import React from 'react';

const ButtonCategory = ({ category, setActiveCategory }) => {
  function getCategory() {
    setActiveCategory(category);
  }
  return (
    <li className="product-button">
      <button className="button" onClick={getCategory}>
        {category.categoryName}
      </button>
    </li>
  );
};

export default ButtonCategory;
