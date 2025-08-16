import { Check } from "lucide-react";
import React from "react";

const OurTraining = ({ imageSrc, heading, paragraphs, reverse }) => {
  return (

    <div
      className={`flex flex-col-reverse items-center gap-8 md:gap-12 lg:gap-16 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="w-full px-1 sm:px-6 md:px-8 md:w-1/2">
        <h2 className="text-4xl font-bold leading-snug text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl font-oswald">
          {heading}
        </h2>
        <div className="mt-4 space-y-4 sm:mt-6 lg:mt-10">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg"
            >
              <Check className="flex-shrink-0 w-5 h-5 mt-1 text-orange-400" />{" "}
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 md:w-1/2">
        <img
          src={imageSrc}
          alt={heading}
          className="object-contain w-full h-auto max-w-md md:max-w-full"
        />
      </div>
    </div>
  );
};

export default OurTraining;
