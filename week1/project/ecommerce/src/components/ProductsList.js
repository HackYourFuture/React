import React from 'react';
const ProductsList = ({ products }) => {
  return (
    <>
      <ul className="products">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <div className="product">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <div className="title-container">
                <p className="product-title">{product.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
