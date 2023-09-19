import React, { useState } from "react";
import Products from "../fake-data/all-products";
import Cart from "./Cart";

function ProductList({ selectedCategory }) {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      console.log("Added to cart:", product);
    } else {
      console.log("Product is already in the cart.");
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    console.log("Removed from cart:", product);
  };

  const showCart = () => {
    setIsCartVisible(true);
  };

  const showProducts = () => {
    setIsCartVisible(false);
  };

  const filteredProducts = selectedCategory
    ? Products.filter(
        (product) => product.category === selectedCategory.substring(6)
      )
    : Products;

  return (
    <div className="product-list">
      <header>
        {isCartVisible ? (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            onBackToProductsClick={showProducts}
          />
        ) : (
          <>
            <button className="cart-container" onClick={showCart}>
              Cart <span className="cart-length">({cart.length})</span>
            </button>
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
          </>
        )}
      </header>
    </div>
  );
}

export default ProductList;
