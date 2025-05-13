import React, { useState } from "react";
import Line from "../components/Line";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    // avatar: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/signup", formData);
      console.log(response.data);
      navigate("/user-profile");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="mt-20 mb-10">
      <main className="max-w-md mx-auto py-12 px-4">
        <div className="bg-white/10 border-2 border-white/20 shadow-lg rounded-lg overflow-hidden p-8">
          <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
            Sign Up for StudentX
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-black py-2 px-4 rounded-md font-medium hover:bg-cyan-600"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="text-cyan-500 hover:text-cyan-600 font-medium"
            >
              Sign in here
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="flex items-center justify-center mx-auto text-sm text-cyan-500 hover:text-cyan-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Need help signing up? Ask our AI assistant
          </button>
        </div>
      </main>

      <div className="mt-10">
        <Line />
      </div>
    </div>
  );
};

export default Signup;
