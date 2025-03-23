import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-full shadow-md w-full max-w-4xl flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-0.5">
      <input
        type="text"
        placeholder="Enter skills / designations"
        className="flex-grow px-4 py-2 rounded-full outline-none bg-white w-full sm:w-auto text-sm sm:text-base"
      />
      <select className="px-4 py-2 rounded-full bg-white border border-gray-300 w-full sm:w-auto text-sm sm:text-base">
        <option>Select experience</option>
        <option>Fresher</option>
        <option>1-3 Years</option>
        <option>3+</option>
      </select>
      <input
        type="text"
        placeholder="Enter location"
        className="flex-grow px-4 py-2 rounded-full outline-none bg-white w-full sm:w-auto text-sm sm:text-base"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300 text-sm sm:text-base w-full sm:w-auto">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
