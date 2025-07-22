import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router

const AccountDashboardPage = () => {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "john@example.com",
    joined: "Jan 15, 2024",
  };

  const navigation = [
    { name: "Dashboard", onClick: () => navigate("/account/dashboard") },
    { name: "Orders", onClick: () => navigate("/account/orders") },
    { name: "Wishlist", onClick: () => navigate("/account/wishlist") },
    { name: "Addresses", onClick: () => navigate("/account/addresses") },
    { name: "Account Settings", onClick: () => navigate("/account/settings") },
    { name: "Logout", onClick: () => localStorage.clear() },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}</h2>
            <ul className="space-y-2">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={item.onClick}
                    className="w-full text-left text-gray-700 hover:text-black hover:font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Dashboard Content */}
          <main className="lg:col-span-3 bg-white shadow rounded p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Account Overview</h2>
              <p className="text-gray-600">Here’s a summary of your account activity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-800">Joined</h3>
                <p className="text-gray-600">{user.joined}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
                <p className="text-gray-600">5 orders</p> {/* Replace with real data */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboardPage;

