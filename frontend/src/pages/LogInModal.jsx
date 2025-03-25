import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Modal, Button, Input, Typography } from "antd";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";

const LogInModal = ({ isModalOpen, setIsModalOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
   console.log(data);
    try {
      const res = await axios.post(`http://localhost:2005/auth/login`, userInfo);
      if (res.data) {
        toast.success("Login successful!");
        localStorage.setItem("users", JSON.stringify(res.data.user));
        window.location.replace("/");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Login failed.");
      }
    }
  };

  // Handle social login (placeholder for now)
  const handleSocialLogin = (platform) => {
    toast.success(`Logging in with ${platform}...`);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      centered
      width={400}
    >
      <Toaster />
      <Typography.Title level={3} className="text-center">
        Welcome to <strong>Hunt The Career</strong>
      </Typography.Title>

      {/* Social Login Buttons */}
      <div className="flex flex-col space-y-3 mb-4">
        <button
          onClick={() => handleSocialLogin("Google")}
          className="flex rounded btn h-9 items-center justify-center bg-black text-white hover:bg-gray-800"
        >
          <FaGoogle className="mr-2 text-white" /> Log in with Google
        </button>
        <button
          onClick={() => handleSocialLogin("LinkedIn")}
          className="flex items-center h-9 rounded justify-center bg-blue-700 text-white hover:bg-blue-800"
        >
          <FaLinkedin className="mr-2 text-white" /> Log in with LinkedIn
        </button>
        <button
          onClick={() => handleSocialLogin("GitHub")}
          className="flex items-center h-9 rounded justify-center bg-gray-800 text-white hover:bg-gray-900"
        >
          <FaGithub className="mr-2 text-white" /> Log in with GitHub
        </button>
      </div>

      <Typography.Paragraph className="text-center my-2">OR</Typography.Paragraph>

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className={`h-12 w-full px-4 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
        
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className={`h-12 px-4 w-full pr-10 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <img
            src={showPassword ? showIcon : hideIcon}
            alt="Toggle Password"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Log In Button */}
        <button
          htmlType="submit"
          block
          className="w-full h-12 bg-black rounded text-white hover:bg-gray-800"
        >
          LOG IN
        </button>
      </form>

      {/* Forgot Password & Sign Up Link */}
      <Typography.Link
        className="block text-center mt-3 text-blue-500 hover:underline"
        href="/forgot-password"
      >
        Forgot Password?
      </Typography.Link>
      <Button
        type="link"
        block
        onClick={() => setIsModalOpen(false)}
        className="mt-2"
      >
        Not a member? <strong>Sign up now</strong>
      </Button>
    </Modal>
  );
};

export default LogInModal;
