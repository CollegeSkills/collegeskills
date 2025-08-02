import React from "react";

const Benefits = ({ title, features = [] }) => {
  return (
    <section className="lg:py-20 py-10 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-[17px] md:text-3xl md:font-bold text-gray-900 mb-8 flex items-center">
        <span className="inline-block w-1 h-6 bg-brand-primary mr-3"></span>
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-sm border border-gray-200 rounded-md px-4 w-96 py-3 hover:shadow-md transition"
          >
            {/* Icon instead of <img> */}
            <div className="text-orange-500 text-2xl">{feature.icon}</div>

            <span className="text-gray-800 font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
