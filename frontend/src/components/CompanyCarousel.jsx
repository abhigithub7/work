import React from "react";
import Marquee from "react-fast-marquee";
import GoogleLogo from "../assets/google.png";
import MicrosoftLogo from "../assets/microsoft.png";
import TCSLogo from "../assets/tcs.png";
import InfosysLogo from "../assets/infosys.png";
import HCLTechLogo from "../assets/hcltech.png";
import IBMLogo from "../assets/ibm.png";
import FlipkartLogo from "../assets/flipkart.png";
// import TechMahindraLogo from "../assets/techmahindra.png";

const CompanyCarousel = () => {
  const companies = [
    { name: "Google", logo: GoogleLogo },
    { name: "Microsoft", logo: MicrosoftLogo },
    { name: "TCS", logo: TCSLogo },
    { name: "Infosys", logo: InfosysLogo },
    { name: "HCLTech", logo: HCLTechLogo },
    { name: "IBM", logo: IBMLogo },
    { name: "Flipkart", logo: FlipkartLogo },
    // { name: "TechMahindra", logo: TechMahindraLogo },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Featured Companies
      </h3>
      <div className="overflow-hidden">
        <Marquee gradient={true} gradientWidth={50} speed={50} pauseOnHover={true}>
          {companies.map((company, index) => (
            <div key={index} className="mx-8 flex items-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 w-32 object-contain transform transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CompanyCarousel;
