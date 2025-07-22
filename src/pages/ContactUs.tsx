import React, { useState } from "react";

const ContactUsPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send to backend or email service
    console.log("Submitted Contact Form:", form);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded h-28 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Send Message
            </button>
          </form>

          {/* Company Info */}
          <div className="space-y-4 text-gray-700">
            <h2 className="text-xl font-semibold text-gray-800">Reach Us</h2>
            <p className="text-sm">
              Have questions about our peanut butter products, orders, or anything else? We’re here to help!
            </p>

            <div>
              <p className="font-medium">📍 Address:</p>
              <p>123 Nutty Lane, Hyderabad, Telangana, India</p>
            </div>

            <div>
              <p className="font-medium">📞 Phone:</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="font-medium">✉️ Email:</p>
              <p>support@peanutbutterco.in</p>
            </div>

            <div>
              <p className="font-medium">⏰ Working Hours:</p>
              <p>Mon - Sat: 9 AM – 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
