import { useState } from "react";

function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="p-5 mt-20">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      <p className="text-lg">Items in Cart: {cartCount}</p>
      <button
        onClick={() => setCartCount(cartCount + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
      <button
        onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
