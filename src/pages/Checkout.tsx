import React, { useState } from "react";

interface CheckoutItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cartItems: CheckoutItem[] = [
    {
      id: 1,
      name: "Peanut Butter Classic 500g",
      image: "/images/product1.jpg",
      price: 250,
      quantity: 2,
    },
    {
      id: 2,
      name: "Peanut Butter Crunchy 1kg",
      image: "/images/product2.jpg",
      price: 450,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed:", { shipping, cartItems, paymentMethod });
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Shipping Address */}
          <div className="lg:col-span-2 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={shipping.name}
                onChange={(e) =>
                  setShipping({ ...shipping, name: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={shipping.phone}
                onChange={(e) =>
                  setShipping({ ...shipping, phone: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                value={shipping.address}
                onChange={(e) =>
                  setShipping({ ...shipping, address: e.target.value })
                }
                required
                className="border p-2 rounded col-span-1 md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                value={shipping.city}
                onChange={(e) =>
                  setShipping({ ...shipping, city: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="State"
                value={shipping.state}
                onChange={(e) =>
                  setShipping({ ...shipping, state: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Pincode"
                value={shipping.pincode}
                onChange={(e) =>
                  setShipping({ ...shipping, pincode: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Country"
                value={shipping.country}
                onChange={(e) =>
                  setShipping({ ...shipping, country: e.target.value })
                }
                required
                className="border p-2 rounded"
              />
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span>Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                <span>Online Payment (Coming Soon)</span>
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow p-6 rounded h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹ {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span>₹ 50</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-semibold my-4">
              <span>Total</span>
              <span>₹ {subtotal + 50}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

