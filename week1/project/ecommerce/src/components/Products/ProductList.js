import React from "react";

import Product from "./Product";

const ProductList = (props) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {props.products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
