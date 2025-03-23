import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 py-26 px-4 text-center">
    {/* HeroSection */}
      <p className="text-gray-600 text-xs sm:text-sm">Top Job Platform of 2025 • Job Hunting Made Easy</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
        No More Solo Job Hunting
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
        DO IT WITH AI HUNTER PILOT
      </h2>
      <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
        Our AI makes landing job interviews dramatically easier and faster! Get matched jobs, tailored resumes, and
        recommended connections in less than 1 min.
      </p>
      <br></br>
      <div className="mb-6 flex justify-center">
        <SearchBar />
      </div>
      
      {/* Button */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
        Try Hunter Pilot for Free
      </button>
      
    </div>
  );
};

export default HeroSection;
