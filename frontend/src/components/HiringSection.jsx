import React from "react";
import { FaHome, FaBuilding, FaRocket, FaBriefcase, FaChartLine, FaUserTie } from "react-icons/fa";

const categories = [
  { name: "Remote", icon: <FaHome /> },
  { name: "MNC", icon: <FaBuilding /> },
  { name: "Software & IT", icon: <FaChartLine /> },
  { name: "Fresher", icon: <FaUserTie /> },
  { name: "Startup", icon: <FaRocket /> },
  { name: "Internship", icon: <FaBriefcase /> },
  { name: "Fortune 500", icon: <FaBuilding /> },
  { name: "Analytics", icon: <FaChartLine /> },
  { name: "Data Science", icon: <FaChartLine /> },
  { name: "Sales", icon: <FaBriefcase /> },
  { name: "HR", icon: <FaUserTie /> },
];

const companies = [
  { category: "MNCs", hiring: "2.1K+", logos: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { category: "Fintech", hiring: "119", logos: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { category: "FMCG & Retail", hiring: "146", logos: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { category: "Startups", hiring: "587", logos: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { category: "Edtech", hiring: "146", logos: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
];

const HiringSection = () => {
  return (
    <div className="px-4 md:px-12 py-10 bg-gradient-to-r from-green-400 to-blue-400">
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Companies Hiring Section */}
      <h2 className="text-2xl font-bold text-center mt-10">Top companies hiring now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {companies.map((company, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{company.category} &rarr;</h3>
            <p className="text-gray-600 text-sm">{company.hiring} are actively hiring</p>
            <div className="flex gap-2 mt-3">
              {company.logos.map((logo, idx) => (
                <img key={idx} src={logo} alt="Company Logo" className="w-10 h-10 rounded-full border" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringSection;
