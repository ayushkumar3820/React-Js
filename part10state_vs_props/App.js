import React, { useState } from 'react';
import Cart from './Cart';  // Import the child component

function App() {
  // State in the parent component to track the total number of items
  const [totalItems, setTotalItems] = useState(5);

  // Function to handle adding items in the parent component
  const addItemToCart = () => {
    setTotalItems(totalItems + 1);
  };

  return (
    <div>
      <h1>Total Items in Store: {totalItems}</h1>
      {/* Pass the totalItems as props to the Cart component */}
      <Cart totalItems={totalItems} addItemToCart={addItemToCart} />
    </div>
  );
}

export default App;
