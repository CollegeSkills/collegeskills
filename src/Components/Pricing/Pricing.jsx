import { Check } from "lucide-react";
import React from "react";

const packages = [
  {
    title: "Basic Package",
    price: "$199",
    features: [
      "Initial Consultation",
      "Online Resources",
      "Tracking Sheets",
      "Email Support",
      "Flexible Scheduling",
      "Private Client Portal",
    ],
    highlight: false,
  },
  {
    title: "Standerd Package",
    price: "$299",
    features: [
      "Initial Consultation",
      "Online Resources",
      "Tracking Sheets",
      "Email Support",
      "Flexible Scheduling",
      "Private Client Portal",
    ],
    highlight: true,
  },
  {
    title: "Primium Package",
    price: "$399",
    features: [
      "Initial Consultation",
      "Online Resources",
      "Tracking Sheets",
      "Email Support",
      "Flexible Scheduling",
      "Private Client Portal",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="px-4 py-16 bg-white md:px-10">
      <div className="w-full px-8 mx-auto">
        {/* Left Section */}
        <div className="space-y-6 font-semibold font-oswald">
          <p className="text-sm font-semibold text-brand-primary">// PRICING</p>
          <h2 className="text-5xl font-semibold text-gray-900">
            Coaching Packages That{" "}
            <span className="text-brand-primary">Fit Every Ambition</span>
          </h2>
          <p className="font-sans text-gray-600">
            Our coaching programs are crafted to suit diverse learning needs and
            goals—from curious beginners to focused achievers. Whether you're
            just exploring, ready to invest in your growth, or seeking a fully
            personalized path, we’ve got a plan for you. Learning is not a
            cost—it’s your most powerful investment.
          </p>
          <button className="px-6 py-3 font-sans font-semibold text-white transition rounded-full bg-gradient-to-r from-brand-primary to-brand-primary hover:scale-105">
            Get All Touch →
          </button>
        </div>

        {/* Right Section - Pricing Cards */}
        <div className="grid items-start gap-10 mt-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border shadow-sm ${
                pkg.highlight
                  ? "bg-gradient-to-r from-brand-primary to-orange-400 text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="mb-2 text-xl font-semibold">{pkg.title}</h3>
              <p className="mb-4 text-4xl font-bold">
                {pkg.price}
                <span className="text-base font-medium">
                  <span
                    className={pkg.highlight ? "text-white" : "text-gray-500"}
                  >
                    /month
                  </span>
                </span>
              </p>
              <ul
                className={`grid grid-cols-2 gap-2 mb-6 text-sm ${
                  pkg.highlight ? "text-white" : "text-gray-700"
                }`}
              >
                {pkg.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>
                      <Check />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
                  pkg.highlight
                    ? "bg-white text-brand-primary"
                    : "bg-gradient-to-r from-brand-primary to-brand-primary text-white"
                }`}
              >
                Purchase Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
