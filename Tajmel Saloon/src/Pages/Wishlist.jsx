import { useState, useEffect } from "react";
import { Heart, Trash2 } from "lucide-react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to add an item to wishlist
  const addToWishlist = (item) => {
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  // Function to remove an item from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto  p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-5">Wishlist</h2>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToWishlist(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Heart className="w-5 h-5" /> Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      {/* Wishlist Items */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Your Wishlist</h3>
        {wishlist.length === 0 ? (
          <p className="text-gray-500 mt-2">No items in your wishlist.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {wishlist.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromWishlist(item.id)} className="text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Sample Product Data
const products = [
  { id: 1, name: "Smartphone", price: 499 },
  { id: 2, name: "Laptop", price: 999 },
  { id: 3, name: "Headphones", price: 149 },
  { id: 4, name: "Smartwatch", price: 199 },
];
