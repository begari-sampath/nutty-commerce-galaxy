import React, { useState } from "react";

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Peanut Butter Classic 1kg",
    description:
      "Smooth and creamy peanut butter made from 100% roasted peanuts. Perfect for breakfast, smoothies, or baking.",
    price: 450,
    image: "/images/product1.jpg",
    rating: 4.5,
    reviews: 32,
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of ${product.name} to cart.`);
  };

  const handleAddToWishlist = () => {
    alert(`${product.name} added to wishlist.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-2">
              ₹ {product.price}
            </p>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center text-yellow-500 text-sm mb-4">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="ml-2 text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 mb-4">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity:
              </label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 border p-1 rounded"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex-1 border border-gray-300 text-black px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
