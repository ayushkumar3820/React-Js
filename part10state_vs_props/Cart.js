import React, { useState } from 'react';

function Cart({ totalItems, addItemToCart }) {
  // Internal state of the Cart component to track items in this cart only
  const [cartItems, setCartItems] = useState(0);

  // Function to handle adding items to the cart (internal state)
  const addToCart = () => {
    setCartItems(cartItems + 1);
    addItemToCart();  // Update the parent state using the function passed via props
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items in Store (From Props): {totalItems}</p>
      <p>Items in Cart (From State): {cartItems}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Cart;
