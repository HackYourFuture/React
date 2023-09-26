import React from "react";

function Cart({ cart, removeFromCart, onBackToProductsClick }) {
  return (
    <div className="cart-items">
      <h2>Shopping Cart</h2>
      <button onClick={onBackToProductsClick}>Back to Products</button>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.title}</span>
              <span className="price">€{item.price}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
