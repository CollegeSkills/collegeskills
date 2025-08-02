// import React from "react";

// const CourseCard = ({
//   badge,
//   title,
//   description,
//   image,
//   startPrice,
//   jobAssistance,
//   startDate,
//   duration,
//   mode,
//   language,
// }) => {
//   return (
//     <div className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-lg">
//       <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="flex-1">
//           <p className="text-sm font-semibold text-red-400 mb-2">{badge}</p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
//           <p className="text-gray-300 mb-6">{description}</p>
//           <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
//             Buy now
//           </button>
//         </div>
//         <div className="flex-1 max-w-sm">
//           <img
//             src={image}
//             alt="Course Visual"
//             className="rounded-lg shadow-lg w-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mt-8 border-t border-gray-700 pt-6 text-sm md:text-base">
//         <div>
//           <p className="font-semibold">Job Assistance</p>
//           <p className="text-gray-400">{jobAssistance}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Date of Commencement</p>
//           <p className="text-gray-400">{startDate}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Duration</p>
//           <p className="text-gray-400">{duration}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Delivery Mode</p>
//           <p className="text-gray-400">{mode}</p>
//         </div>
//         <div>
//           <p className="font-semibold">Language</p>
//           <p className="text-gray-400">{language}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from "react";

const CourseCard = ({
  badge,
  title,
  description,
  image,
  startPrice,
  jobAssistance,
  startDate,
  duration,
  mode,
  language,
}) => {
  return (
    <div className="w-full text-black p-6 mt-9 px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:pt-20">
          <p className="text-sm font-semibold text-brand-primary mb-2">{badge}</p>
          <h2 className="text-3xl md:text-6xl font-bold mb-4 font-oswald">{title}</h2>
          <p className="text-slate-800 mb-6">{description}</p>
          <button className="bg-brand-primary text-white px-5 py-2 rounded hover:bg-orange-500 transition">
            Buy now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:px-9">
          <img
            src={image}
            alt="Course Visual"
            className="w-full h-[200px] md:h-[350px] md:w-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mt-8 border-t border-gray-700 pt-6 text-sm md:text-base">
        <div className="border-r border-gray-200">
          <p className="font-semibold">Job Assistance</p>
          <p className="text-gray-400">{jobAssistance}</p>
        </div>
        <div className="lg:border-r lg:border-gray-200">
          <p className="font-semibold">Date of Commencement</p>
          <p className="text-gray-400">{startDate}</p>
        </div>
        <div className="border-r border-gray-200">
          <p className="font-semibold">Duration</p>
          <p className="text-gray-400">{duration}</p>
        </div>
        <div className="lg:border-r lg:border-gray-200">
          <p className="font-semibold">Delivery Mode</p>
          <p className="text-gray-400">{mode}</p>
        </div>
        <div className="">
          <p className="font-semibold">Language</p>
          <p className="text-gray-400">{language}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
