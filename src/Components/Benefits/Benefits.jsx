// import { Check } from "lucide-react";
// import React from "react";

// const Benefits = ({ title, features = [] }) => {
//   return (
//     <section className="px-4 py-5 lg:py-0 md:px-10 lg:px-20">
//       {/* Heading */}
//       <h2 className="text-[17px] md:text-3xl md:font-bold text-gray-900 mb-8 flex items-center">
//         <span className="inline-block w-1 h-6 mr-3 bg-brand-primary"></span>
//         {title}
//       </h2>

//       {/* Grid */}
//       <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 ">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 px-4 py-3 transition border border-orange-200 rounded-md shadow-sm bg-gradient-to-tr from-orange-100 to-orange-50 w-96 hover:shadow-md"
//           >
//             {/* Icon instead of <img> */}
//             {/* <div className="text-2xl text-orange-500">{feature.icon}</div> */}

//             <span className="flex gap-2 font-medium text-brand-text"><Check/>{feature.text}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Benefits;

import { Check, School, Radio } from "lucide-react";
import React from "react";

const Benefits = ({ title, features = [] }) => {
  return (
    <section className="max-w-5xl">
        <h2 className="text-[17px] md:text-3xl md:font-bold text-gray-900 mb-6 flex items-center">
          <span className="inline-block w-1 h-6 mr-3 bg-brand-primary"></span>
          {title}
        </h2>
      <div className="w-full max-w-3xl p-6 border border-orange-200 shadow-lg rounded-xl bg-gradient-to-tr from-orange-100 to-orange-50">
        {/* Heading */}
      

        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="text-orange-500">
                {feature.icon || <Check />}
              </div>
              <span className="font-medium text-gray-800">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;


