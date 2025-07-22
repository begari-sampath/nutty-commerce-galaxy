import React, { useState } from "react";

interface Address {
  id: number;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

const AddressBookPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "John Doe",
      phone: "9876543210",
      street: "123 Main St",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500001",
      country: "India",
    },
  ]);

  const [form, setForm] = useState<Omit<Address, "id">>({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update existing address
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingId ? { id: editingId, ...form } : addr))
      );
      setEditingId(null);
    } else {
      // Add new address
      const newAddress: Address = {
        id: Date.now(),
        ...form,
      };
      setAddresses((prev) => [...prev, newAddress]);
    }

    // Reset form
    setForm({
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
    });
  };

  const handleEdit = (id: number) => {
    const addr = addresses.find((a) => a.id === id);
    if (addr) {
      setForm({ ...addr });
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Address Book</h1>

        {/* Address Form */}
        <form onSubmit={handleAddOrUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-2 rounded"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            className="border p-2 rounded col-span-1 md:col-span-2"
            value={form.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border p-2 rounded"
            value={form.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="border p-2 rounded"
            value={form.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="border p-2 rounded"
            value={form.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="border p-2 rounded"
            value={form.country}
            onChange={handleChange}
            required
          />
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
            >
              {editingId ? "Update Address" : "Add Address"}
            </button>
          </div>
        </form>

        {/* Address List */}
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <p className="text-gray-600">No addresses saved yet.</p>
          ) : (
            addresses.map((addr) => (
              <div
                key={addr.id}
                className="border rounded p-4 bg-gray-50 flex flex-col md:flex-row justify-between md:items-center"
              >
                <div className="text-gray-800">
                  <p className="font-semibold">{addr.name}</p>
                  <p>{addr.phone}</p>
                  <p>{addr.street}</p>
                  <p>
                    {addr.city}, {addr.state} - {addr.pincode}
                  </p>
                  <p>{addr.country}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <button
                    onClick={() => handleEdit(addr.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(addr.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressBookPage;

