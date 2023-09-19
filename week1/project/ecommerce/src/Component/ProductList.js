import React, { useState } from "react";
import Products from "../fake-data/all-products";
import Cart from "./Cart"; // Import the Cart component

function ProductList({ selectedCategory }) {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false); // State to control cart visibility

  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      console.log("Added to cart:", product);
    } else {
      console.log("Product is already in the cart.");
    }
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Toggle cart visibility
  };

  const filteredProducts = selectedCategory
    ? Products.filter(
        (product) => product.category === selectedCategory.substring(6)
      )
    : Products;

  return (
    <div className="product-list">
      <header>
        {/* Conditionally render the Cart component */}
        {isCartVisible && <Cart cart={cart} />}
        <button className="cart-container" onClick={toggleCartVisibility}>
          Cart <span className="cart-length">({cart.length})</span>
        </button>
      </header>
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <span className="price">€{product.price}</span>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Reviews: {product.rating.count}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
