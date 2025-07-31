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
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-6 font-oswald font-semibold">
          <p className="text-brand-primary font-semibold text-sm">// PRICING</p>
          <h2 className="text-5xl font-bold text-gray-900">
            Coaching <span className="text-brand-primary">packages that fit</span>
          </h2>
          <p className="text-gray-600 font-sans">
            Our coaching packages are designed to meet diverse needs and
            budgets, providing flexibility for every individual and
            organization. Whether you're seeking personal.
          </p>
          <button className="bg-gradient-to-r from-brand-primary to-brand-primary font-sans text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Get All Touch →
          </button>
        </div>

        {/* Right Section - Pricing Cards */}
        <div className="space-y-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border shadow-sm ${
                pkg.highlight
                  ? "bg-gradient-to-r from-brand-primary to-orange-400 text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-4xl font-bold mb-4">
                {pkg.price}
                <span className="text-base font-medium">
                  <span className={pkg.highlight ? "text-white" : "text-gray-500"}>
                    /month
                  </span>
                </span>
              </p>
              <ul
                className={`grid grid-cols-3 gap-2 mb-6 text-sm ${
                  pkg.highlight ? "text-white" : "text-gray-700"
                }`}
              >
                {pkg.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span><Check/></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-1/4 py-2 rounded-full font-semibold text-sm transition ${
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
