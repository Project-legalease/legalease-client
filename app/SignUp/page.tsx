"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const CustomButton = ({ href, children, className }: any) => (
  <Link href={href}>
    <button className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>{children}</button>
  </Link>
);

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-white-cover bg-center">
        <div className="w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/SignupBackground.jpg')` }}></div>
      </div>

      <div className="w-1/2 p-8 bg-white">
        <h2 className="text-3xl font-extrabold text-center text-blue-950 font-sans">CREATE YOUR ACCOUNT</h2>
        <p className="mt-0 text-center text-gray-900 italic font-normal text-sm">
          Let&apos;s get you all set up so you can verify your personal account.
        </p>
        <h3 className="text-center font-bold text-blue-900 mt-10">Register With:</h3>

        <div className="flex justify-center mt-6">
          <CustomButton href="/auth/google" className="px-5 py-1.5 mx-2 text-white bg-gray-700 rounded hover:bg-gray-700">
            <FaGoogle className="inline mr-2" />
            <span className="mr-2">Sign in with Google</span>
          </CustomButton>

          <CustomButton href="/auth/google" className="px-5 py-1.5 mx-2 text-white bg-gray-700 rounded hover:bg-gray-700">
            <FaGithub className="inline mr-2" />
            <span className="mr-2"> Sign in with GitHub</span>
          </CustomButton>
        </div>

        <form className="mt-6 flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75 placeholder-italic"
              type="text"
              id="firstName"
              placeholder="Input Your First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75"
              type="text"
              id="lastName"
              placeholder="Input Your Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="username">
              Username:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75"
              type="text"
              id="username"
              placeholder="Input Your Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="email">
              Email Address:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75"
              type="email"
              id="email"
              placeholder="Input Your Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="password">
              Password:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75"
              type="password"
              id="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-extrabold text-gray-900" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="px-10 py-2 border rounded border-solid border-black placeholder-gray-500 placeholder-opacity-75"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="w-1/2 px-4 py-2 text-white bg-red-500 rounded hover:red-600 m-auto">Sign Up</button>
        </form>

        <p className="mt-4 text-center text-gray-600 font-bold">
          By creating an account, you agree to our {" "}
          <Link href="#" className="text-blue-500 underline">
            Terms of Service
          </Link>
          . We’ll occasionally send account-related emails.
        </p>
        <p className="mt-4 text-center text-gray-600 pb-0">
          Already have an account?{" "}
          <a href="#" className="text-red-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
