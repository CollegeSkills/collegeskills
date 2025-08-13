import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg shadow-md">
          <h1 className="mb-4 text-3xl font-bold">Terms and Conditions</h1>
          <p className="mb-6 text-gray-700">
            Welcome to College Skills! These Terms and Conditions govern your
            use of our website, courses, and related services provided by
            College Skills. By accessing or using our services, you agree to
            comply with and be bound by these Terms.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">1. Use of Services</h2>
          <p className="mb-4 text-gray-700">
            You agree to use our platform and services for lawful purposes only
            and in accordance with these Terms. You shall not misuse our
            services or engage in any activity that disrupts or harms our
            systems or other users.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">
            2. Course Enrollment and Fees
          </h2>
          <ul className="mb-4 text-gray-700 list-disc list-inside">
            <li>
              Course fees and payment terms will be clearly specified on the
              respective course pages.
            </li>
            <li>
              Payments once made are non-refundable unless otherwise stated.
            </li>
            <li>
              We reserve the right to modify course content, fees, or schedules
              at any time with prior notice.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-semibold">3. User Accounts</h2>
          <ul className="mb-4 text-gray-700 list-disc list-inside">
            <li>
              You must provide accurate and complete information during
              registration.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-semibold">
            4. Intellectual Property
          </h2>
          <p className="mb-4 text-gray-700">
            All content, materials, and resources provided on our platform are
            owned by College Skills or our licensors and are protected by
            copyright laws. You may use the content solely for personal learning
            and not for commercial purposes. Unauthorized copying, distribution,
            or reproduction of our content is prohibited.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">5. Certificates</h2>
          <p className="mb-4 text-gray-700">
            Certificates of completion will be issued as per course criteria.
            Certificates are valid only when earned through completion of course
            requirements and are not transferable.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">
            6. Privacy and Data Protection
          </h2>
          <p className="mb-4 text-gray-700">
            Your use of our services is also governed by our Privacy Policy,
            which outlines how we collect, use, and protect your personal data.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">
            7. Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-700">
            College Skills shall not be liable for any direct or indirect
            damages arising from the use or inability to use our services. We do
            not guarantee specific job placements or career outcomes.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">8. Termination</h2>
          <p className="mb-4 text-gray-700">
            We reserve the right to suspend or terminate your access to our
            platform if you violate these Terms or engage in harmful or illegal
            behavior.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">9. Governing Law</h2>
          <p className="mb-4 text-gray-700">
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of courts in New Delhi.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">10. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms from time to time. Continued use of our
            services after changes implies acceptance of the updated Terms.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
