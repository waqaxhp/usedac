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
              <img
                src="/Content/Images/logo i.png"
                alt="Logo"
                className="h-14"
              />
              {/* <span className="text-xl font-bold ml-2 text-green-700">
                Quran Online Lessons
              </span> */}
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
                to="/courses"
                className="text-gray-200 font-bold hover:text-green-700 focus:outline-none"
              >
                Courses
              </NavLink>
              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2">
                <NavLink
                  to="/digital-library"
                  className="block px-4 py-2 font-bold text-gray-700 hover:bg-green-100"
                >
                  Downlode
                </NavLink>
                <NavLink
                  to="/noorani-qaida"
                  className="block px-4 py-2 font-bold text-gray-700 hover:bg-green-100"
                >
                  Noorani Qaida
                </NavLink>
                <NavLink
                  to="/tajweed-quran"
                  className="block px-4 py-2 font-bold text-gray-700 hover:bg-green-100"
                >
                  Tajweed e Quran
                </NavLink>

                <NavLink
                  to="/quran-memorization"
                  className="block px-4 py-2 font-bold text-gray-700 hover:bg-green-100"
                >
                  Quran Memorization
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/testimonials"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Testimonial
            </NavLink>
            <NavLink
              to="/hadiya"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Hadiya
            </NavLink>
            <NavLink
              to="/teachers"
              className="text-gray-200 font-bold hover:text-green-700"
            >
              Teachers
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
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100"
            >
              Courses
            </button>
            {/* Dropdown Menu */}
            <div className="pl-6">
              <a
                href="/noorani-qaida"
                className="block px-4 py-2 text-gray-700 hover:bg-green-100"
              >
                Noorani Qaida
              </a>
              <a
                href="/tajweed-quran"
                className="block px-4 py-2 text-gray-700 hover:bg-green-100"
              >
                Tajweed e Quran
              </a>
              <a
                href="/quran-memorization"
                className="block px-4 py-2 text-gray-700 hover:bg-green-100"
              >
                Quran Memorization
              </a>
            </div>
          </div>
          <a
            href="/testimonials"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            Testimonial
          </a>
          <a
            href="/hadiya"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            Hadiya
          </a>
          <a
            href="/teachers"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            Teachers
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
