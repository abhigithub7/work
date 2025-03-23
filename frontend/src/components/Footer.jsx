import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
      
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <h2 className="text-2xl font-bold">HUNT THE CAREER</h2>
          </div>
          <p className="text-gray-400 mt-4">
            Find your dream job with AI-powered insights. Explore thousands of opportunities today.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-200 transition"><a href="#">Home</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Jobs</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Companies</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Career Advice</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-200 transition"><a href="#">Resume Builder</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Interview Tips</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Career Growth</a></li>
            <li className="hover:text-gray-200 transition"><a href="#">Freelance Jobs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@huntthecareer.com</p>
          <p className="text-gray-400">Phone: +91 12345 67890</p>
          <p className="text-gray-400 mt-2">123 Main St, INDIA, IND 10001</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-6 text-gray-400">

          <a href="https://www.linkedin.com/company/hunt-the-career/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500 transition" />
          </a>

          <a href="https://www.instagram.com/huntthecareer?igsh=ZTFybXA4cDlqeWtz" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition" />
          </a>

          <a href="https://www.github.com/huntthecareer0" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl cursor-pointer hover:text-black transition" /> 
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} HuntTheCareer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-blue-900 text-white py-12 mt-16">
//       <div className="container mx-auto px-6">
//         {/* Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">Hunt The Career</h3>
//             <p className="text-gray-300">
//               Your ultimate platform to find the perfect job. We connect job seekers with top employers worldwide.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition duration-300">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-300">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-300">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-300">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/features" className="text-gray-300 hover:text-white transition duration-300">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="/tools" className="text-gray-300 hover:text-white transition duration-300">
//                   Tools
//                 </a>
//               </li>
//               <li>
//                 <a href="/resume-ai" className="text-gray-300 hover:text-white transition duration-300">
//                   Resume AI
//                 </a>
//               </li>
//               <li>
//                 <a href="/for-employer" className="text-gray-300 hover:text-white transition duration-300">
//                   For Employers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">Contact Us</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-300">Email: support@huntthecareer.com</li>
//               <li className="text-gray-300">Phone: +1 (123) 456-7890</li>
//               <li className="text-gray-300">Address: 123 Job Street, Career City, World</li>
//             </ul>
//           </div>

//           {/* Newsletter Subscription */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
//             <p className="text-gray-300">
//               Get the latest job updates and career tips directly in your inbox.
//             </p>
//             <form className="flex space-x-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-lg focus:outline-none text-gray-900"
//               />
//               <button
//                 type="submit"
//                 className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-300">
//             &copy; {new Date().getFullYear()} Hunt The Career. All rights reserved.
//           </p>
//           <button
//             onClick={scrollToTop}
//             className="mt-4 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
//           >
//             Back to Top
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;