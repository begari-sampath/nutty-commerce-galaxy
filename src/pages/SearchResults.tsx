import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate search result fetch
  useEffect(() => {
    setLoading(true);

    // Mock data
    const allProducts: Product[] = [
      {
        id: 1,
        name: "Peanut Butter Classic 500g",
        image: "/images/product1.jpg",
        price: 250,
      },
      {
        id: 2,
        name: "Peanut Butter Crunchy 1kg",
        image: "/images/product2.jpg",
        price: 450,
      },
      {
        id: 3,
        name: "Almond Butter Smooth 250g",
        image: "/images/product3.jpg",
        price: 300,
      },
    ];

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setTimeout(() => {
      setProducts(filtered);
      setLoading(false);
    }, 500); // simulate API delay
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Search Results for “{query}”
        </h1>

        {loading ? (
          <p className="text-gray-600">Loading results...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-600">No products found for your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded shadow hover:shadow-md transition p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-green-600 font-medium mt-1">
                  ₹ {product.price}
                </p>
                <button
                  className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900"
                  onClick={() =>
                    alert(`Added "${product.name}" to your cart.`)
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;

