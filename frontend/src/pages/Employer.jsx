import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Employer = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-3xl font-bold">For Employer</h1>
        <p className="mt-4 text-gray-600">
          Find the best candidates and streamline your hiring process with our platform.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Employer;
