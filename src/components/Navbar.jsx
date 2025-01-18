// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white text-2xl font-semibold">
          <a href="/">MyLogo</a>
        </div>

        {/* Menu (Home, About, Services, Contact) */}
        <div className="flex-1 flex justify-center space-x-6 text-white">
          <a href="/" className="hover:text-blue-300">
            Home
          </a>
          <a href="/" className="hover:text-blue-300">
            Backtrack
          </a>
        </div>

        {/* Login/Signup Buttons */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="text-white bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md"
          >
            Signup
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
