import React from "react";

const OrderConfirmationPage: React.FC = () => {
  const order = {
    id: "PBX123456789",
    date: "July 22, 2025",
    total: 750,
    deliveryEstimate: "July 25–28, 2025",
    items: [
      {
        name: "Peanut Butter Classic 500g",
        quantity: 2,
        price: 250,
      },
      {
        name: "Peanut Butter Crunchy 1kg",
        quantity: 1,
        price: 450,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600">Your order has been placed successfully.</p>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-medium">Order ID:</span> {order.id}
          </p>
          <p>
            <span className="font-medium">Order Date:</span> {order.date}
          </p>
          <p>
            <span className="font-medium">Estimated Delivery:</span> {order.deliveryEstimate}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h2>
          <ul className="space-y-3">
            {order.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between text-gray-700 border-b pb-2"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹ {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg mt-4 text-gray-800">
            <span>Total Paid</span>
            <span>₹ {order.total}</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
