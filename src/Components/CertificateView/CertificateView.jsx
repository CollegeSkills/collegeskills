import { useState } from "react";
import { X } from "lucide-react";
import certificate from "../../assets/certificate.png"

const CertificateSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

//   const handleZoom = () => setIsZoomed(true);
  const handleClose = () => setIsZoomed(false);

  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col items-center justify-between w-full gap-10 px-6 py-12 mt-20 bg-white mb-14 md:flex-row md:py-10">
        {/* Left Text */}
        <div className="w-full space-y-4 px-9">
          <div className="border-l-4 border-[#F2635C] pl-3">
            <h2 className="text-2xl font-semibold text-gray-900 font-oswald md:text-4xl">
              Validating Your Success: About Your Certificate
            </h2>
          </div>

          <div className="pt-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 underline md:text-xl">
       Soft Skills
            </h3>

            <p className="font-semibold text-gray-700">
              You will be able to generate the certificate for course of completion:
            </p>

            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>After watching 60% of videos</li>
              <li>After completing 60% in Quiz & Assignment</li>
              <li>
                The above criteria is only for getting the course completion certificate.
                For details regarding Job Assistance criteria, <span className="px-6">please refer to the FAQs.</span> 
              </li>
            </ul>
          </div>
        </div>

        {/* Right Certificate */}
        <div className="relative flex justify-center w-full md:w-1/2">
          <img
               src={certificate}// replace with actual path or imported image
            alt="Certificate"
            className="max-w-xs rounded-md shadow-md md:max-w-sm"
          />
          {/* <button
            onClick={handleZoom}
            className="absolute flex items-center gap-1 px-2 py-1 text-sm text-gray-700 bg-white rounded shadow bottom-2 right-2 hover:underline"
          >
            🔍 Click to zoom
          </button> */}
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-80">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 z-50"
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <img
                src={certificate}
              alt="Zoomed Certificate"
              className="w-full max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateSection;
