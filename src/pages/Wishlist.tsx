import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([
    {
      id: 1,
      name: "Peanut Butter Crunchy 500g",
      image: "/images/product1.jpg",
      price: 250,
    },
    {
      id: 2,
      name: "Peanut Butter Smooth 1kg",
      image: "/images/product2.jpg",
      price: 450,
    },
  ]);

  const moveToCart = (product: Product) => {
    alert(`Moved "${product.name}" to cart.`);
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="border rounded p-4 bg-white shadow hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-green-600 font-medium mt-1">₹ {product.price}</p>

                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => moveToCart(product)}
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="w-full border border-gray-300 text-red-600 py-2 rounded hover:bg-red-50 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;

