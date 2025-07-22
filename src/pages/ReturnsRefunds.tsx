import React from "react";

const ReturnsRefundsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Returns & Refunds Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Our Commitment</h2>
          <p className="text-gray-600">
            At Peanut Butter Co., we strive to ensure that every order reaches you in perfect
            condition. However, if you are not fully satisfied with your purchase, we’re here to help
            you with our hassle-free returns and refund policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Return Eligibility</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Returns must be initiated within 7 days of receiving the product.</li>
            <li>Items must be unopened, unused, and in original packaging.</li>
            <li>Products with damaged packaging or tampered seals are not eligible.</li>
            <li>Only items purchased directly from our website are returnable.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Non-Returnable Items</h2>
          <p className="text-gray-600">
            Due to safety and hygiene reasons, opened or used food items cannot be returned or
            exchanged unless defective or damaged during shipping.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. How to Request a Return</h2>
          <ol className="list-decimal ml-5 text-gray-600 space-y-1">
            <li>Email us at <a href="mailto:support@peanutbutterco.in" className="text-blue-600 underline">support@peanutbutterco.in</a> with your order number and reason.</li>
            <li>Attach clear photos if the item is damaged or incorrect.</li>
            <li>We will confirm eligibility and arrange pickup or guide return steps.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Refund Process</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Once we receive and inspect your return, we will process your refund.</li>
            <li>Refunds are issued to the original payment method.</li>
            <li>It typically takes 7–10 business days for the refund to reflect in your account.</li>
            <li>You will receive confirmation once the refund has been processed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding returns or refunds, please contact us:
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

export default ReturnsRefundsPage;
