import React from 'react';
import allProducts from '../fake-data/all-products';

const ButtonCategory = ({ category, setProducts }) => {
  function filterProducts() {
    const filterByCategory = allProducts.filter(
      (product) => product.category === category.categoryName,
    );
    setProducts(filterByCategory);
  }
  return (
    <li className="product-button">
      <button className="button" onClick={filterProducts}>
        {category.buttonCategory}
      </button>
    </li>
  );
};

export default ButtonCategory;
