import React, { useState } from "react";
import Line from "../components/Line";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in attempt with:", { email, password, rememberMe });
    // Add authentication logic here
  };

  return (
   <div>
     <div className="max-h-screen mt-40">
      <main className="max-w-md mx-auto py-12 px-4">
        <div className="bg-white/10 border-2 border-white/20 shadow-lg rounded-lg overflow-hidden p-8">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
              Sign In to StudentX
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-cyan-500 hover:text-cyan-500 placeholder:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-500 text-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center mb-6">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-black py-2 px-4 rounded-md text-lg font-medium hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-cyan-500 hover:text-cyan-600 font-medium"
                >
                  Sign up free
                </a>
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-cyan-500 border-t border-black rounded-lg">
            <div className="text-center">
              <p className="text-ms text-black">
                By signing in, you agree to our{" "}
                <a href="#" className="text-red-500 hover:text-teal-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-red-500 hover:text-teal-600">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* AI assistance section */}
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
            Need help signing in? Ask our AI assistant
          </button>
        </div>
      </main>

      
    </div>
    <div className="mt-10 mb-10">
      <Line />
    </div>
   </div>
  );
};

export default Signup;
