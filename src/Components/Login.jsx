import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 duration-500">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="flex space-x-8 justify-center">
          {/* Login Form */}
          {isLogin && (
            <div className="w-1/2 space-y-6">
              <form>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="w-full py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition duration-300 transform hover:scale-105"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Sign Up Form */}
          {!isLogin && (
            <div className="w-1/2 space-y-6">
              <form>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="w-full py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Toggle between Login and Sign Up */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <span className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
