import React, { useState } from "react";

interface PaymentMethod {
  id: number;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
}

const PaymentMethodsPage: React.FC = () => {
  const [methods, setMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      cardHolder: "John Doe",
      cardNumber: "**** **** **** 1234",
      expiry: "08/27",
    },
  ]);

  const [form, setForm] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();

    const masked = `**** **** **** ${form.cardNumber.slice(-4)}`;
    const newMethod = {
      id: Date.now(),
      cardHolder: form.cardHolder,
      cardNumber: masked,
      expiry: form.expiry,
    };

    setMethods([...methods, newMethod]);
    setForm({ cardHolder: "", cardNumber: "", expiry: "" });
    alert("Card added successfully!");
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to remove this card?")) {
      setMethods(methods.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Payment Methods</h1>

        {/* Existing Cards */}
        <div className="space-y-4 mb-10">
          {methods.length === 0 ? (
            <p className="text-gray-600">No saved payment methods.</p>
          ) : (
            methods.map((method) => (
              <div
                key={method.id}
                className="border rounded p-4 flex items-center justify-between bg-gray-50"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {method.cardHolder}
                  </p>
                  <p className="text-sm text-gray-600">{method.cardNumber}</p>
                  <p className="text-sm text-gray-600">Expires: {method.expiry}</p>
                </div>
                <button
                  onClick={() => handleDelete(method.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Add New Card */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Card</h2>
        <form onSubmit={handleAddCard} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder Name"
            value={form.cardHolder}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number (16 digits)"
            maxLength={16}
            pattern="\d{16}"
            value={form.cardNumber}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            pattern="\d{2}/\d{2}"
            value={form.expiry}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 w-full"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;

