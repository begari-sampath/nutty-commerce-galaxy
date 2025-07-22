import React from "react";

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Return & Refund Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Overview</h2>
          <p className="text-gray-600">
            At Peanut Butter Co., customer satisfaction is our top priority. If you're not
            completely happy with your purchase, you may request a return or exchange in accordance
            with the policy outlined below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Eligibility for Returns</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Return request must be placed within 7 days of delivery.</li>
            <li>Product must be unused, sealed, and in original packaging.</li>
            <li>Items with tampered seals or signs of use are not eligible.</li>
            <li>Returns are only accepted for orders placed via our official website.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Non-Returnable Items</h2>
          <p className="text-gray-600">
            Due to health and hygiene concerns, opened food products cannot be returned unless
            damaged during shipping or defective.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Return Process</h2>
          <ol className="list-decimal ml-5 text-gray-600 space-y-1">
            <li>Contact our support team at <a href="mailto:support@peanutbutterco.in" className="text-blue-600 underline">support@peanutbutterco.in</a>.</li>
            <li>Provide order number, product details, and reason for return.</li>
            <li>Once approved, we will schedule a pickup from your address.</li>
            <li>Pack the item securely to prevent damage during return transit.</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Refunds</h2>
          <p className="text-gray-600">
            After we receive and inspect the returned item, a refund will be processed to your
            original payment method within 7–10 business days. You will be notified via email once
            the refund has been issued.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Need Help?</h2>
          <p className="text-gray-600">
            If you have any questions about our return and refund policy, please contact us at{" "}
            <a href="mailto:support@peanutbutterco.in" className="text-blue-600 hover:underline">
              support@peanutbutterco.in
            </a>{" "}
            or call us at +91 98765 43210.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
