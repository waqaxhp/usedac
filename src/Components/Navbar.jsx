import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              {/* <img
                src="/Content/Images/logo i.png"
                alt="Logo"
                className="h-14"
              /> */}
              <img
                src="/Content/Images/Ac logo.png"
                alt="Logo"
                className="h-16"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Home
            </NavLink>
            <div className="relative group">
              <NavLink
                to="/services"
                className="text-gray-200 font-bold hover:text-green-700 focus:outline-none"
              >
                Courses
              </NavLink>
            </div>
            <NavLink
              to="/testimonials"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Testimonial
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/mechanics"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Mechanics
            </NavLink>

            <NavLink
              to="/about"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-black z-50">
          <div className="flex flex-col">
            <NavLink
              to="/"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </NavLink>

            <NavLink
              to="/testimonials"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </NavLink>

            <NavLink
              to="/pricing"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/mechanics"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Mechanics
            </NavLink>

            <NavLink
              to="/about"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact-us"
              className="block px-4 py-3 text-gray-200 font-bold hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
