import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            At Peanut Butter Co., we respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, and safeguard
            your data when you use our website and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Information We Collect</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Personal details such as name, email, address, and phone number</li>
            <li>Payment information for order processing</li>
            <li>Usage data and website interactions (via cookies and analytics)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>To fulfill and manage orders</li>
            <li>To send transactional emails and shipping updates</li>
            <li>To improve user experience and customer service</li>
            <li>To send promotional content (only if you opt-in)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Data Sharing & Security</h2>
          <p className="text-gray-600">
            We do not sell your personal information. Your data may be shared with secure third-party
            payment gateways (like Stripe/Razorpay) and shipping providers to process your order.
            We implement industry-standard security measures to protect your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal information. You may also
            opt out of marketing emails at any time by clicking the “Unsubscribe” link.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Cookies</h2>
          <p className="text-gray-600">
            We use cookies and similar technologies to enhance your browsing experience. You can
            manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Updates to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. All changes will be posted on this
            page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this policy, contact us at:{" "}
            <a href="mailto:privacy@peanutbutterco.in" className="text-blue-600 hover:underline">
              privacy@peanutbutterco.in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

