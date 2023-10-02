import React from 'react';
import { Link } from 'react-router-dom';
import './productList.css';

function ProductList({ products }) {
  const limitedProducts = products.slice(0, 10);

  return (
    <div className="product__list">
      {limitedProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="product-link"
        >
          <div className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
