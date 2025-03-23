import React from "react";

const ResumeBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-200 to-blue-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-10 px-6 md:px-12 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Need help with your resume?</h2>
              <p className="mt-2 text-lg">
                Get experts to build your resume from scratch and stand out!
              </p>
            </div>

            <div>
              <button className="px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-blue-600 font-semibold rounded-lg shadow-md hover:from-gray-300 transition duration-300">
                View Details
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBanner;
