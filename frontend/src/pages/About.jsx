import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Learn more about Hunt The Career and our mission to connect job seekers with the best opportunities.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
