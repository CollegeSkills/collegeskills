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
//     <div className="w-full p-6 text-white shadow-lg bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl">
//       <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//         <div className="flex-1">
//           <p className="mb-2 text-sm font-semibold text-red-400">{badge}</p>
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
//           <p className="mb-6 text-gray-300">{description}</p>
//           <button className="px-5 py-2 text-white transition bg-red-500 rounded hover:bg-red-600">
//             Buy now
//           </button>
//         </div>
//         <div className="flex-1 max-w-sm">
//           <img
//             src={image}
//             alt="Course Visual"
//             className="object-cover w-full rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 pt-6 mt-8 text-sm text-center border-t border-gray-700 md:grid-cols-5 md:text-base">
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
    <div className="w-full p-6 px-12 text-black mt-9">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:pt-20">
          <p className="mb-2 text-sm font-semibold text-brand-primary">{badge}</p>
          <h2 className="mb-4 text-3xl font-bold md:text-6xl font-oswald">{title}</h2>
          <p className="mb-6 text-slate-800">{description}</p>
          <button className="px-5 py-2 text-white transition rounded bg-brand-primary hover:bg-orange-500">
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
      <div className="grid grid-cols-2 gap-4 pt-6 mt-10 text-sm text-center border-t border-gray-700 md:grid-cols-5 md:text-base">
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
