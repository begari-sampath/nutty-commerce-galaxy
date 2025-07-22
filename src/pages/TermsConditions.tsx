import React from "react";

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to Peanut Butter Co. By accessing our website and placing an order, you agree to
            be bound by the terms and conditions outlined below. If you disagree with any part of
            these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Use of the Website</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>You must be at least 18 years old to purchase from our website.</li>
            <li>All information you provide must be accurate and complete.</li>
            <li>Do not misuse or interfere with the security of the website.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Product Information</h2>
          <p className="text-gray-600">
            We strive to ensure all product information, pricing, and availability are accurate.
            However, we reserve the right to make changes at any time without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Orders & Payments</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>All orders are subject to availability and confirmation.</li>
            <li>Prices include applicable taxes unless stated otherwise.</li>
            <li>We accept secure payments via credit/debit cards, UPI, and online wallets.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Shipping & Delivery</h2>
          <p className="text-gray-600">
            We ship across India using trusted logistics partners. Delivery timelines and shipping
            charges are detailed in our{" "}
            <a href="/shipping-info" className="text-blue-600 underline">
              Shipping Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Returns & Refunds</h2>
          <p className="text-gray-600">
            Please refer to our{" "}
            <a href="/returns-refunds" className="text-blue-600 underline">
              Returns & Refunds Policy
            </a>{" "}
            for details on how to request a return or refund.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, images, and branding on this site are the intellectual property of Peanut
            Butter Co. and may not be used or reproduced without written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Limitation of Liability</h2>
          <p className="text-gray-600">
            Peanut Butter Co. shall not be liable for any direct, indirect, incidental, or
            consequential damages resulting from the use or inability to use our products or website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these terms at any time. Users are advised to review this
            page periodically for changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about our Terms & Conditions, please contact us at:
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

export default TermsConditionsPage;

