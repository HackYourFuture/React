import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="content-container">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="rating">Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
      </div>
    </div>
  );
};

export default ProductCard;