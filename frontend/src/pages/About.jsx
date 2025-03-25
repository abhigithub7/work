import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBriefcase, FaUsers, FaChartLine, FaHandshake, FaRocket, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const GradientCard = ({ children }) => (
  <motion.div 
    className="relative overflow-hidden rounded-xl"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 rounded-xl"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20">
      {children}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-300 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeIn>
            <motion.div 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block"
            >
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-white">  Hunt The Career</span>
              </h1>
            </motion.div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
              Where <span className="font-semibold text-indigo-600">talent</span> meets <span className="font-semibold text-purple-600">opportunity</span>
            </p>
          </FadeIn>
        </div>

        {/* Unique Value Proposition */}
        <FadeIn delay={0.3}>
          <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-5xl opacity-30 absolute"
                >
                  <FaRocket />
                </motion.div>
                <FaLightbulb className="text-5xl relative" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Why Hunt Stands Out</h2>
              <p className="text-lg opacity-90">
                Unlike traditional job boards, Hunt uses <span className="font-semibold">AI-powered matching</span>, 
                <span className="font-semibold"> video profiles</span>, and <span className="font-semibold">skills validation</span> to create meaningful 
                connections that last. We're not just filling positions—we're building careers.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Our Story */}
        <div className="mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn>
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2023 by recruitment veterans and tech innovators, Hunt was born from a simple 
                  realization: <span className="font-medium text-indigo-600">the job search process is broken for everyone</span>.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We're rebuilding it from the ground up with transparency, fairness, and cutting-edge 
                  technology at our core.
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Learn our founding principles →
                </motion.div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden h-64 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <motion.div 
                    className="text-8xl font-bold text-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <FaBriefcase />
                  </motion.div>
                  <div className="relative text-center p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">The Hunt Difference</h3>
                    <p className="text-white/90">Smart. Personal. Effective.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
              Not Just a Job Board — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">A Career Ecosystem</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <GradientCard>
                <div className="text-indigo-600 mb-4">
                  <FaBriefcase className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3D Candidate Profiles</h3>
                <p className="text-gray-600">
                  Go beyond resumes with video introductions, skills assessments, and work samples that showcase true potential.
                </p>
              </GradientCard>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <GradientCard>
                <div className="text-purple-600 mb-4">
                  <FaUsers className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culture Matching</h3>
                <p className="text-gray-600">
                  Our proprietary algorithm evaluates work style preferences to ensure cultural fit from day one.
                </p>
              </GradientCard>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <GradientCard>
                <div className="text-indigo-600 mb-4">
                  <FaChartLine className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Salary Transparency</h3>
                <p className="text-gray-600">
                  Real salary ranges for every position, plus market data to help you negotiate with confidence.
                </p>
              </GradientCard>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <GradientCard>
                <div className="text-purple-600 mb-4">
                  <FaLightbulb className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Pathing</h3>
                <p className="text-gray-600">
                  See where this role could take you in 1, 3, or 5 years with our career trajectory visualizations.
                </p>
              </GradientCard>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <GradientCard>
                <div className="text-indigo-600 mb-4">
                  <FaHandshake className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Prep</h3>
                <p className="text-gray-600">
                  Get company-specific interview questions and practice with AI that gives feedback on your responses.
                </p>
              </GradientCard>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <GradientCard>
                <div className="text-purple-600 mb-4">
                  <FaRocket className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast-Track Hiring</h3>
                <p className="text-gray-600">
                  Qualified candidates can skip right to final interviews with our verified skills certification.
                </p>
              </GradientCard>
            </FadeIn>
          </div>
        </div>
          {/* Interactive Stats */}
          <FadeIn>
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white relative overflow-hidden">
            <motion.div
              animate={{
                x: ['-10%', '10%', '-10%'],
                y: ['-10%', '5%', '-10%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full h-full opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            
            <div className="relative max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Hunt in Motion</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: "50K+", label: "Career Transformations", delay: 0 },
                  { value: "2K+", label: "Innovative Companies", delay: 0.1 },
                  { value: "85%", label: "Match Success Rate", delay: 0.2 },
                  { value: "4.9★", label: "User Satisfaction", delay: 0.3 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.p 
                      className="text-5xl font-bold mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-indigo-100">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Team Section */}
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Visionaries</span> Behind Hunt
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                initials: "JD",
                name: "John Doe",
                role: "Founder & CEO",
                bio: "Recruitment industry disruptor with 15 years in talent acquisition",
                color: "from-indigo-400 to-indigo-600",
              },
              {
                initials: "AS",
                name: "Alice Smith",
                role: "CTO",
                bio: "AI/ML expert focused on ethical algorithms for hiring",
                color: "from-purple-400 to-purple-600",
              },
              {
                initials: "RJ",
                name: "Robert Johnson",
                role: "Head of Product",
                bio: "User experience wizard passionate about removing job search friction",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((member, index) => (
              <FadeIn key={index} delay={0.1 * (index + 1)}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-48 bg-gradient-to-r ${member.color} flex items-center justify-center relative`}>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <span className="text-6xl font-bold text-white/80">{member.initials}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-3 font-medium`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/20">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">redefine</span> your career journey?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/signup"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Join as Job Seeker
              </motion.a>
              <motion.a
                href="/employer-signup"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-lg bg-white text-indigo-600 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Top Talent
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
      {/* <div className="container mx-auto mt-20 text-center">

        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Learn more about Hunt The Career and our mission to connect job seekers with the best opportunities.
        </p>
      </div>  */}
       {/* <div className="bg-gradient-to-b from-green-300 to-green-500 py-50 flex flex-col items-center">  
      <div className="flex flex-col items-center mb-10">  
        <h1 className="text-5xl font-bold text-white">  
          The Future of   
          <span className="text-black"> Job Search</span>  
        </h1>  
      </div>  
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg text-center">  
        <h2 className="text-2xl font-semibold mb-4">  
          Our Mission  
        </h2>  
        <p className="text-gray-700">  
          We empower you with equal opportunities to build your dream career. Applying to numerous jobs without a clear strategy won't lead you to your ideal role. Using Jobright's AI job search, we guide you every step of the way to the offer you deserve.  
        </p>  
      </div>  
    </div>  
       <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-200 to-green-300">  
      <h1 className="text-4xl font-bold text-center text-black mb-6">  
        The Future of Job Search  
      </h1>  
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">  
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>  
        <p className="text-gray-700">  
          We empower you with equal opportunities to build your dream career.  
          Applying to numerous jobs without a clear strategy won't lead you to  
          your ideal role. Using Jobright's AI job search, we will guide you  
          every step of the way to the offer you deserve.  
        </p>  
      </div>  
    </div>   */}
     {/* <div className="min-h-screen bg-gray-50 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About <span className="text-indigo-600">Hunt</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Revolutionizing the way job seekers and employers connect.
          </p>
        </div>

        
        <div className="mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-500 mb-4">
                Founded in 2023, Hunt was born out of frustration with traditional job boards. 
                We noticed that both job seekers and employers were struggling to find the perfect match.
              </p>
              <p className="text-lg text-gray-500">
                Our mission is to create a platform that uses smart algorithms and human-centric 
                design to make the job hunting process more efficient, transparent, and enjoyable 
                for everyone involved.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 lg:h-96 bg-indigo-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-600 opacity-20"></div>
              <span className="relative text-5xl font-bold text-indigo-800">Hunt</span>
            </div>
          </div>
        </div>

      
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">What We Offer</h2> */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">
                <FaBriefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Job Matching</h3>
              <p className="text-gray-500">
                Our advanced algorithms match candidates with jobs that truly fit their skills and aspirations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">
                <FaUsers className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talent Pool</h3>
              <p className="text-gray-500">
                Employers gain access to a curated pool of qualified candidates actively seeking new opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">
                <FaChartLine className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Insights</h3>
              <p className="text-gray-500">
                Get valuable data and insights to help you make informed career decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">
                <FaHandshake className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplified Process</h3>
              <p className="text-gray-500">
                Streamlined application process with tools for both job seekers and employers.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Meet The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-indigo-800">JD</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
                <p className="text-indigo-600 mb-3">Founder & CEO</p>
                <p className="text-gray-500">
                  With 10+ years in HR tech, John envisioned a better way to connect talent with opportunity.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-indigo-800">AS</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Alice Smith</h3>
                <p className="text-indigo-600 mb-3">CTO</p>
                <p className="text-gray-500">
                  Alice leads our technical team with expertise in machine learning and scalable systems.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-indigo-800">RJ</span>
              </div> */}
              {/* <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Robert Johnson</h3>
                <p className="text-indigo-600 mb-3">Head of Product</p>
                <p className="text-gray-500">
                  Robert ensures our platform delivers exceptional user experiences for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="bg-indigo-700 rounded-lg p-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Hunt By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white mb-2">50K+</p>
                <p className="text-indigo-200">Active Job Seekers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">2K+</p>
                <p className="text-indigo-200">Companies Hiring</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">10K+</p>
                <p className="text-indigo-200">Successful Matches</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">95%</p>
                <p className="text-indigo-200">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Ready to transform your career journey?</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="/signup"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Join as Job Seeker
            </a>
            <a
              href="/employer-signup"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Hire Talent
            </a>
          </div>
        </div>
      </div>
    </div> */}
      <Footer/>
    </>
  );
};

export default About;
