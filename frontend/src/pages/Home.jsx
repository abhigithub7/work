import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import SearchBar from "../components/SearchBar";
import ResumeBanner from "../components/ResumeBanner";
import HiringSection from "../components/HiringSection";
import Footer from "../components/Footer";
import CompanyCarousel from "../components/CompanyCarousel";
// import Banners from "../components/Banners";

const Home = () => {
  return (
    <>
      <Navbar/>
      {/* <SearchBar/> */}
      <HeroSection/>
      <ResumeBanner/>
      {/* <Banners/> */}
      <HiringSection/>
      <CompanyCarousel/>
      <Footer/>
    </>
  );
};

export default Home;
