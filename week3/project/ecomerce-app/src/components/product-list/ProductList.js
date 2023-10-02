import React from 'react';
import { Link } from 'react-router-dom';
import './productList.css';
import FavoriteButton from './favorite-button/FavoriteButton';

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
            <FavoriteButton productId={product.id} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
