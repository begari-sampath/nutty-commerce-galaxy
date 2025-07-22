import React, { useState } from "react";
import { products } from "../data/products";
export type Product = typeof products[number];

const WishlistPage: React.FC = () => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const moveToCart = (product: Product) => {
        if (!cart.find((item) => item.id === product.id)) {
            setCart([...cart, product]);
        }
        setWishlist(wishlist.filter((item) => item.id !== product.id));
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((item) => item.id !== productId));
    };

    const addToWishlist = (product: Product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

                {/* All Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded p-4 bg-white shadow hover:shadow-md transition">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-green-600 font-medium mt-1">₹ {product.price}</p>
                            <button
                                onClick={() => addToWishlist(product)}
                                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    ))}
                </div>

                {/* Wishlist Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">My Wishlist</h2>
                    {wishlist.length === 0 ? (
                        <p className="text-gray-600">Your wishlist is empty.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wishlist.map((product) => (
                                <div key={product.id} className="border rounded p-4 bg-white shadow hover:shadow-md transition">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
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

                {/* Cart Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cart.map((product) => (
                                <div key={product.id} className="border rounded p-4 bg-white shadow hover:shadow-md transition">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                                    <p className="text-green-600 font-medium mt-1">₹ {product.price}</p>

                                    <div className="mt-4 flex flex-col gap-2">
                                        <button
                                            onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
                                            className="w-full border border-gray-300 text-red-600 py-2 rounded hover:bg-red-50 transition"
                                        >
                                            Remove from Cart
                                        </button>
                                        <button
                                            onClick={() => {
                                                setWishlist([...wishlist, product]);
                                                setCart(cart.filter((item) => item.id !== product.id));
                                            }}
                                            className="w-full bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition"
                                        >
                                            Save to Wishlist
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;
