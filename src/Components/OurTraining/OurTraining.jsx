import { Check } from "lucide-react";
import React from "react";

const OurTraining = ({ imageSrc, heading, paragraphs, reverse }) => {
  return (
    <div
      className={`flex flex-col items-center gap-10 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >

      {/* Text */}
      <div className="w-full px-5 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 md:text-5xl font-oswald">
          {heading}
        </h2>
        <div className="space-y-5 lg:pt-10">
            {paragraphs.map((para, i) => (
          <p key={i} className="flex gap-2 leading-relaxed text-gray-600">
           <Check className="text-orange-400"/> {para}
          </p>
        ))}
        </div>
        
      </div>
            {/* Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={heading}
          className="relative object-contain w-full h-auto max-w-full lg:-top-20"
        />
      </div>
    </div>
  );
};

export default OurTraining;
