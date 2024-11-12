// ProductList.jsx
import React from 'react';
import products from '../fake-data/all-products';

function ProductList({ activeCategory }) {
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory.replace('FAKE: ', ''))
    : products;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}
    >
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              marginBottom: '10px'
            }}
          />
          <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
          <p style={{ color: '#666' }}>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
