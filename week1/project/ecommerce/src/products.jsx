import React from "react";

const Products = ({ products }) => {
    return (
        <ul className="products">
        {products.map((product) => (
            <li key={product.id} className="product-item">
                <div className="product">
                    <img className="product-img"src={product.image} alt={product.name} />
                    <span>{product.title}</span>
                </div>
            </li>
        ))}
        </ul>
    );
    }

export default Products;