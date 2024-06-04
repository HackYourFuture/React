

import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="center">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
        </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
