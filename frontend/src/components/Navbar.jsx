import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LogInModal from "../pages/LogInModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
   <LogInModal isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen} />

  

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="text-xl font-bold text-gray-900">HUNT THE CAREER</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">

          
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/tools" className="text-gray-700 hover:text-blue-600">Tools</Link>
          <Link to="/resumeai" className="text-gray-700 hover:text-blue-600">Resume AI</Link>
          <Link to="/employer" className="text-gray-700 hover:text-blue-600">For Employer</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signup" className="px-4 py-2 border border-black text-black rounded-lg hover:bg-blue-50">
            Sign Up
          </Link>
          <a  onClick={() => setIsLoginModalOpen(true)} className="px-4 py-2 border bg-black text-white rounded-lg hover:bg-blue-900">
            Login
          </a>
          <LogInModal isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen} />

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-4 py-2">
          
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="block py-2 text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/tools" className="block py-2 text-gray-700 hover:text-blue-600">Tools</Link>
          <Link to="/resumeai" className="block py-2 text-gray-700 hover:text-blue-600">Resume AI</Link>
          <Link to="/employer" className="block py-2 text-gray-700 hover:text-blue-600">For Employer</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/blog" className="block py-2 text-gray-700 hover:text-blue-600">Blog</Link>

          <div className="border-t border-gray-200 my-2"></div>
          <Link to="/signup" className="w-full block py-2 border border-black text-black rounded-lg hover:bg-blue-100 my-2">
            Sign Up
          </Link>
          <Link onClick={() => setIsLoginModalOpen(true)} to="/login" className="w-full block py-2 bg-black text-white rounded-lg hover:bg-blue-50">
            Log in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



