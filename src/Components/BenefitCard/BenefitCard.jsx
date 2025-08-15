import React from "react";
import { CheckCircle } from "lucide-react";
import { GiCheckMark } from "react-icons/gi";

const BenefitsCard = ({
  title,
  icon: Icon,
  color,
  items,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`p-2 transition-all duration-300
                  bg-gradient-to-br ${gradientFrom} ${gradientTo} 
                  border border-gray-100 shadow-md rounded-2xl`}
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className={`${color} w-6 h-6 hidden`} />
        <h2 className="text-3xl font-semibold lg:4xl text-brand-primary font-oswald">
          {title}
        </h2>
      </div>
      <ul className="space-y-4 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={`${color} mt-1`}>
              <GiCheckMark />{" "}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BenefitsCard;
