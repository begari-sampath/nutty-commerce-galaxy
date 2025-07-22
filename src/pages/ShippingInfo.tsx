import React from "react";

const ShippingInfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shipping Information</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Shipping Timeline</h2>
          <p className="text-gray-600">
            We process and ship orders within 1–2 business days. Orders placed after 5 PM will be
            processed the next working day. Shipping times vary based on location:
          </p>
          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Metro Cities: 2–4 business days</li>
            <li>Non-Metro Cities: 3–7 business days</li>
            <li>Remote Areas: 5–10 business days</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Shipping Charges</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Free shipping on all orders above ₹499</li>
            <li>₹50 flat shipping fee for orders below ₹499</li>
            <li>Express delivery (1–2 days): ₹149 (optional)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Delivery Partners</h2>
          <p className="text-gray-600">
            We work with trusted logistics partners like Delhivery, Blue Dart, and Shiprocket to
            ensure reliable and timely delivery.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Order Tracking</h2>
          <p className="text-gray-600">
            Once your order is shipped, you will receive a tracking link via email and SMS. You can
            also track your order in the “My Orders” section of your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. International Shipping</h2>
          <p className="text-gray-600">
            Currently, we only deliver within India. International shipping will be available soon.
            Stay tuned by subscribing to our newsletter!
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Need Help?</h2>
          <p className="text-gray-600">
            For questions or delivery issues, contact our support team:
          </p>
          <p className="text-gray-600 mt-2">
            📧 Email:{" "}
            <a
              href="mailto:support@peanutbutterco.in"
              className="text-blue-600 hover:underline"
            >
              support@peanutbutterco.in
            </a>
          </p>
          <p className="text-gray-600">📞 Phone: +91 98765 43210</p>
        </section>
      </div>
    </div>
  );
};

export default ShippingInfoPage;

