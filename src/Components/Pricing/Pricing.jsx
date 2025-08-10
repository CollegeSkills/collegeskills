import { Check, CircleCheckBig } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "Ignite",
    price: "₹0",
    colorClass: "bg-blue-100 text-blue-700", // light blue box
    buttonClass: "bg-blue-400 text-white hover:bg-blue-700",
    featuresColor: "text-blue-500",
    features: [
      "Basic communication",
      "Interview rejection reasons",
      "Key soft skills for growth",
      "Kick-start your journey",
      "Quick skill gap check",
      "Free tools & guidance",
    ],
    highlight: false,
  },
  {
    title: "Elevate",
    price: "₹2,500",
    colorClass: "bg-gradient-to-r from-brand-primary to-orange-400 text-white", // gradient
    buttonClass: "bg-white text-brand-primary hover:opacity-90",
    featuresColor: "text-white",
    features: [
      "Advanced communication",
      "Body language mastery",
      "Ethics & etiquettes",
      "Email writing & presence",
      "Complete soft skill pack",
      "Practical modules",
      "Webinars, mocks, GDs",
      "Trainer feedback & support",
      "Personalized assessment",
    ],
    highlight: true,
  },
  {
    title: "Elite",
    price: "From ₹7,500",
    colorClass: "bg-purple-100 text-purple-900", // light purple
    buttonClass: "bg-purple-700 text-white hover:bg-purple-800",
    featuresColor: "text-purple-900",
    features: [
      "In-depth assessment",
      "Fully customized training",
      "Tailored modules",
      "Mentor & premium trainer",
      "Flexible schedule",
      "Regular feedback",
      "For individuals & campuses",
      "Full learning support",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="px-4 py-16 bg-white md:px-10">
      <div className="w-full px-8 mx-auto">
        {/* Left Section */}
        <div className="space-y-6 lg:font-semibold font-oswald">
          <p className="text-sm lg:font-semibold text-brand-primary">
            // PRICING
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 lg:text-5xl">
            Coaching Packages That{" "}
            <span className="text-brand-primary">Fit Every Ambition</span>
          </h2>
          <p className="font-sans text-gray-600">
            Our coaching programs are crafted to suit diverse learning needs and
            goals from curious beginners to focused achievers. Whether you're
            just exploring, ready to invest in your growth, or seeking a fully
            personalized path, we’ve got a plan for you. Learning is not a cost
            it’s your most powerful investment.
          </p>
          <button className="px-6 py-3 font-sans font-semibold text-white transition rounded-full bg-gradient-to-r from-brand-primary to-brand-primary hover:scale-105">
          <Link to='/contact'>Get All Touch → </Link>
          </button>
        </div>

        {/* Right Section - Pricing Cards */}
        {/* <div className="grid items-start gap-10 mt-6 md:grid-cols-3">
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
                className={`grid grid-cols-1 gap-2 mb-6 text-sm ${
                  pkg.highlight ? "text-white" : "text-gray-700"
                }`}
              >
                {pkg.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>
                      <CircleCheckBig size={20}/>
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
        </div> */}
        <div className="grid items-start gap-10 mt-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 shadow-sm ${pkg.colorClass}`}
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
              <ul className={`grid gap-2 mb-6 text-sm ${pkg.featuresColor}`}>
                {pkg.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CircleCheckBig size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`px-4 py-2 rounded-full font-semibold text-sm transition ${pkg.buttonClass}`}
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
