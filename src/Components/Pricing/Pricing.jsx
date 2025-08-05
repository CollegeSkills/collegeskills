import { Check, CircleCheckBig } from "lucide-react";
import React from "react";

const packages = [
  {
    title: "Ignite",
    price: "₹0",
    features: [
      "Basic communication for beginners",
      "Main causes of rejection in interviews",
      "Essential soft skills for personal growth",
      "Perfect for kick-starting your soft skill journey",
      "Start with a quick assessment to know your skill gaps",
      "Free resources and guidance to get started",
    ],
    highlight: false,
  },
  {
    title: "Elevate",
    price: "₹2,500",
    features: [
      "Advanced communication techniques",
      "Master effective body language",
      "Learn ethics and professional etiquettes",
      "Write professional emails and boost digital presence",
      "Full range of soft skills for personal and career growth",
      "Includes interactive modules and real-world exercises",
      "Access to webinars, mock interviews, and group discussions",
      "Ongoing support and feedback from experienced trainers",
      "Personalized assessment to identify your needs"
    ],
    highlight: true,
  },
  {
    title: "Elite",
    price: "Starting at ₹7,500",
    features: [
      "Begin with a detailed personal assessment",
      "100% customized skill training based on your needs",
      "Handpicked modules designed for your unique journey",
      "Dedicated mentor and premium instructor access",
      "Flexible timelines and tailored content",
      "Regular progress tracking and feedback sessions",
      "Ideal for individuals or campus groups seeking personalized growth",
      "Exclusive support throughout your learning experience"
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
          <p className="text-sm lg:font-semibold text-brand-primary">// PRICING</p>
          <h2 className="text-3xl font-semibold text-gray-900 lg:text-5xl">
            Coaching Packages That{" "}
            <span className="text-brand-primary">Fit Every Ambition</span>
          </h2>
          <p className="font-sans text-gray-600">
            Our coaching programs are crafted to suit diverse learning needs and
            goals from curious beginners to focused achievers. Whether you're
            just exploring, ready to invest in your growth, or seeking a fully
            personalized path, we’ve got a plan for you. Learning is not a
            cost it’s your most powerful investment.
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;
