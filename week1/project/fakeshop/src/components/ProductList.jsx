import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        ))
      ) : (
        <p>No products available for this category.</p>
      )}
    </div>
  );
};

export default ProductList;
