import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RefundPolicy = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen p-6">
      <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Return and Refund Policy</h1>
        <p className="mb-6 text-gray-700">
          At College Skills, we strive to provide quality education and training services to our learners. Please read our refund policy carefully before enrolling in any course.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">1. Course Fees</h2>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>All course fees are clearly mentioned on the course page before purchase.</li>
          <li>Payments can be made through secure payment gateways.</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">2. Refund Eligibility</h2>
        <p className="mb-4 text-gray-700">
          Since our courses are digital and accessed online, we generally do not offer refunds after purchase. Refunds may be considered only in the following exceptional cases:
        </p>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>If the course is canceled by College Skills.</li>
          <li>If the course content significantly differs from what was advertised.</li>
          <li>Technical issues that prevent access to course content, and that are unresolved within a reasonable time frame.</li>
          <li>Requests for refunds must be submitted in writing within 7 days of purchase.</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">3. Refund Process</h2>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>To request a refund, please contact our support team at [support@collegeskills.in].</li>
          <li>Refund requests will be reviewed on a case-by-case basis.</li>
          <li>Approved refunds will be processed within 7-10 business days via the original mode of payment.</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">4. Course Cancellations and Rescheduling</h2>
        <p className="mb-4 text-gray-700">
          College Skills reserves the right to reschedule or cancel any course due to unforeseen circumstances. In case of cancellation, learners will be notified promptly and offered alternative sessions or a full refund.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">5. No Refund for Partial Completion</h2>
        <p className="mb-4 text-gray-700">
          No refunds will be provided for partially completed courses or if you decide to discontinue the course after accessing any content.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">6. Contact Us</h2>
        <p className="text-gray-700">
          For any questions or concerns regarding refunds, please reach out to our support team at [support@collegeskills.in].
        </p>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default RefundPolicy;
