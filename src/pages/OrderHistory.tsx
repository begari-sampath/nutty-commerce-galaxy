import React, { useState } from "react";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  status: "Delivered" | "Processing" | "Cancelled";
  total: number;
  items: OrderItem[];
}

const OrderHistoryPage: React.FC = () => {
  const [orders] = useState<Order[]>([
    {
      id: "PBX1001",
      date: "July 15, 2025",
      status: "Delivered",
      total: 950,
      items: [
        { name: "Peanut Butter Classic 500g", quantity: 2, price: 250 },
        { name: "Peanut Butter Crunchy 1kg", quantity: 1, price: 450 },
      ],
    },
    {
      id: "PBX1002",
      date: "July 10, 2025",
      status: "Processing",
      total: 500,
      items: [{ name: "Peanut Butter Classic 500g", quantity: 2, price: 250 }],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-600">You haven't placed any orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border rounded p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Order #{order.id}
                    </h2>
                    <p className="text-sm text-gray-600">Placed on {order.date}</p>
                    <p className="text-sm mt-1">
                      Status:{" "}
                      <span
                        className={`font-medium ${
                          order.status === "Delivered"
                            ? "text-green-600"
                            : order.status === "Processing"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total:</p>
                    <p className="text-lg font-bold text-gray-800">₹ {order.total}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Items in this order:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>₹ {item.quantity * item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;

