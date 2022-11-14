import React from "react";

function Products({ filteredProducts }) {
  return (
    <div className="productList">
      {filteredProducts.map((product) => (
        <div className="productCard" key={product.id}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
