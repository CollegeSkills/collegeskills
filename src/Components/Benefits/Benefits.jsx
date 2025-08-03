import React from "react";

const Benefits = ({ title, features = [] }) => {
  return (
    <section className="px-4 py-10 lg:py-24 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-[17px] md:text-3xl md:font-bold text-gray-900 mb-8 flex items-center">
        <span className="inline-block w-1 h-6 mr-3 bg-brand-primary"></span>
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-3 transition bg-white border border-gray-200 rounded-md shadow-sm w-96 hover:shadow-md"
          >
            {/* Icon instead of <img> */}
            <div className="text-2xl text-orange-500">{feature.icon}</div>

            <span className="font-medium text-gray-800">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
