import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-gray-600">
          Stay updated with the latest career tips, job market trends, and hiring insights.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
