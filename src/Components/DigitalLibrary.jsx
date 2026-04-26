import React from "react";
import { FaBook, FaQuran, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DigitalLibrary = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/Content/Images/bgimge.jpg"
          alt="Quran Banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Enrich your faith with our digital library.
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Download the Holy Quran, Hadith, Kalimas, and prayers for convenient
            study and reflection.
          </p>
          <p className="mt-2 text-sm md:text-base">
            We warmly welcome all Muslims to come and understand the Holy Quran
            under our expert teachers.
          </p>
          <NavLink to="/contact-us">
            <button className="mt-6 bg-green-600 hover:bg-green-700 transition duration-300 transform hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg">
              Let’s Discuss
            </button>
          </NavLink>
          <p className="mt-2 text-xs">
            You will be impressed by our well-trained Quran tutors – it’s a
            guarantee!
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="py-12 px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Download Buttons */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="bg-green-700 text-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-2">
              <FaBook className="text-3xl" />
            </div>
            <p className="text-sm font-medium">Download Noorani Qaida</p>
          </div>
          <div className="bg-green-700 text-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-2">
              <FaQuran className="text-3xl" />
            </div>
            <p className="text-sm font-medium">Download Full Paras Quran</p>
          </div>
          <div className="bg-green-700 text-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-2">
              <FaBook className="text-3xl" />
            </div>
            <p className="text-sm font-medium">Download 6 Colored Kalimas</p>
          </div>
        </div>

        {/* Right Section - Book Images */}
        <div className="w-full lg:w-1/2 flex justify-center items-center gap-8">
          <img
            src="/Content/Images/books.png" // Replace with your book image path
            alt="Book"
            className="w-48 h-56 transform hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      {/* <a
        href="https://wa.me/your_number"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
      </a> */}
    </div>
  );
};

export default DigitalLibrary;
