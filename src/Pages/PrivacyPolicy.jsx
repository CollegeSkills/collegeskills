import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen p-2">
      <div className="max-w-6xl p-4 mx-auto bg-white rounded-lg shadow-md lg:p-8">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-gray-700">
          <strong>Effective Date:</strong> 21/08/25
        </p>
        <p className="mb-6 text-gray-700">
          College Skills is committed to protecting your privacy and ensuring
          the security of your personal data. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website and use our services.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">1. Information We Collect</h2>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>
            <strong>Personal Information:</strong> Includes your name, contact
            details (email, phone), demographic information, educational
            background, and any data you provide during registration, course
            enrollment, or communication with us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information automatically collected
            when you interact with our platform, including IP address, browser
            type, pages visited, and session duration.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> To improve user
            experience, personalize content, and analyze site traffic.
          </li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">2. Purpose of Data Collection</h2>
        <p className="mb-4 text-gray-700">
          We collect and process your data to:
        </p>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>Deliver and manage our educational courses and services effectively.</li>
          <li>Communicate important updates, offers, and customer support.</li>
          <li>Personalize your learning experience and improve our platform.</li>
          <li>Comply with legal obligations and protect our rights and users.</li>
          <li>Conduct analytics and marketing activities to enhance service delivery.</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">3. Data Sharing and Disclosure</h2>
        <p className="mb-4 text-gray-700">
          We do not sell, trade, or rent your personal information. We may share your data with:
        </p>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>
            <strong>Service Providers:</strong> Trusted partners (payment gateways, IT service providers) who assist in operating our services under strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law or to protect rights, safety, or property.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of mergers or acquisitions, subject to confidentiality agreements.
          </li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">4. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We employ advanced security measures, including encryption, secure servers, and access controls to safeguard your information against unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">5. Your Rights and Choices</h2>
        <p className="mb-4 text-gray-700">
          You have the right to access, correct, or request deletion of your personal data. You may opt-out of marketing communications at any time by contacting us. Cookie preferences can be managed through your browser settings.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">6. Cookies Policy</h2>
        <p className="mb-4 text-gray-700">
          Our website uses cookies to enhance functionality and user experience. By continuing to use our website, you consent to our use of cookies. For more information, please refer to our Cookies Policy.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">7. Retention of Data</h2>
        <p className="mb-4 text-gray-700">
          We retain your personal information only as long as necessary to fulfill the purposes described in this policy or to comply with legal requirements.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">8. International Data Transfers</h2>
        <p className="mb-4 text-gray-700">
          If you are accessing our services from outside India, your information may be transferred and processed in India or other countries where our servers or service providers are located.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">9. Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this policy periodically. Any significant changes will be communicated via email or website notifications. We encourage you to review this policy regularly.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">10. Contact Information</h2>
        <p className="text-gray-700">
          For any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Email: support@collegeskills.in</li>
          <li>Phone: [Insert Phone Number]</li>
          <li>Address: , New Delhi – 110025</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
