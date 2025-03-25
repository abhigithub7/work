import React, { useState } from "react";
import LogInModal from "./LogInModal";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data) => {
    const userInfo ={
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password
        
    }
   await axios.post(`http://localhost:2005/auth/signup`,userInfo)
    .then((res)=>{
        console.log(res.data);
        if(res.data)
        {
            toast.success('Successfully Register');
            localStorage.setItem("users",JSON.stringify(res.data.user));
            window.location.replace('/')
        }
    }).catch((err)=>{
        if(err.response)
            {
                console.log(err);
                toast.error('user already exits ! ' );
        
            }
        
    })
  }
    









  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full md:flex-row mt-16 h-auto md:h-screen">
        {/* Left Section */}
        <div className="w-full text-center md:text-start md:w-1/2 bg-gradient-to-b from-green-100 to-white p-6 md:p-10 flex flex-col justify-center relative">
         

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black mt-12 md:mt-16">
            Ensure a{" "}
            <span className="text-black">Fast and Successful Journey</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">Your Next Career Move</p>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-white">
          <h2 className="text-2xl text-black text-center mb-6">
            Welcome to <span className="font-bold">Hunt The Career</span>
          </h2>

          {/* Social Login Buttons - Vertical Layout */}
          <div className="flex flex-col w-full space-y-4 mb-6">
            <button className="w-full py-2 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800">
              <FaGoogle className="mr-2 text-xl" /> Sign up with Google
            </button>
            <button className="w-full py-2 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800">
              <FaLinkedin className="mr-2 ml-1 text-xl" /> Sign up with LinkedIn
            </button>
            <button className="w-full py-2 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-gray-800">
              <FaGithub className="mr-2 text-xl" /> Sign up with GitHub
            </button>
          </div>

          <div className="my-4 text-gray-500">OR</div>

          {/* Name Inputs */}
          <div  className="flex flex-col mb-4 md:flex-row gap-3 w-full">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstname", { required: true })}
              required
              className="w-full p-3 border rounded mb-2 md:mb-0 text-black placeholder-gray-500"
            />
             {errors.firstname && <span>This field is required</span>}
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
              required
              className="w-full p-3 border rounded text-black placeholder-gray-500"
            />
             {errors.lastname && <span>This field is required</span>}
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            required
            className="w-full p-3 border  rounded mb-4 text-black placeholder-gray-500"
          />
           {errors.email && <span>This field is required</span>}

          {/* Password Input */}
          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              required
              className="w-full p-3 border rounded text-black placeholder-gray-500 pr-10"
            />
             {errors.password && <span>This field is required</span>}
            <img
              src={showPassword ? showIcon : hideIcon}
              alt="Toggle Password"
              className="absolute right-3 top-3 cursor-pointer w-5 h-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start mb-4 w-full">
            <input
              id="sign-up_emailSub"
              type="checkbox"
              className="w-4 h-4 border-2 border-black bg-transparent checked:bg-white checked:border-black focus:ring-0 appearance-none 
              relative before:content-['✔'] before:absolute before:text-black before:text-xs before:left-[2px] before:top-[-1px] before:opacity-0 
              checked:before:opacity-100"
            />
            <label htmlFor="sign-up_emailSub" className="text-gray-600 ml-2">
              I want to receive updates from Hunt The Career about the latest
              job offers.
            </label>
          </div>

          {/* Signup Button */}
          <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition duration-200">
            SIGN UP
          </button>

          {/* Login Link */}
          <p className="text-gray-500 text-sm mt-4">
            Already a member?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Log in now
            </a>
          </p>
        </form>

        {/* Login Modal */}
        <LogInModal
          isModalOpen={isLoginModalOpen}
          setIsModalOpen={setIsLoginModalOpen}
        />
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;

