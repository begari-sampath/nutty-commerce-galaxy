import React, { useState } from "react";

const AccountSettingsPage: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword && newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    // Simulate API call
    console.log("Saving account settings:", {
      name,
      email,
      currentPassword,
      newPassword,
    });

    alert("Settings saved successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h1>
        <form onSubmit={handleSaveChanges} className="space-y-6">
          {/* Profile Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          {/* Password Section */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* Address Management Link */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Address Book</h2>
            <p className="text-sm text-gray-600 mb-2">Manage your saved shipping addresses.</p>
            <a
              href="/account/addresses"
              className="text-blue-600 hover:underline text-sm"
            >
              Go to Address Book &rarr;
            </a>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettingsPage;

