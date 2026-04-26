import React from "react";
import QuranTutoring from "./QuranTutoring";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const LiveQuranTeachers = () => {
  return (
    <>
      <div className="bg-green-50">
        {/* Hero Section */}
        <div className="relative bg-green-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">
              We provide professional AC selling, buying, and repair services
              for homes and businesses.
            </h1>

            <p className="mt-4 text-lg">
              At AC Service Hub, we connect customers with trusted technicians
              and sellers. Whether you need a new AC, used AC, installation, or
              repair service — we ensure fast, reliable, and affordable
              solutions for all your cooling needs.
            </p>

            <button className="mt-6 bg-green-600 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Let’s Discuss
            </button>
          </div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/Content/Images/About us.jpg')`,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Why Choose Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-green-700 text-3xl font-bold text-center md:text-left">
                  BEST AC BUY & SELL SERVICE
                </h2>

                <h3 className="text-2xl font-extrabold text-gray-800 mt-4 text-center md:text-left">
                  Why Choose Our AC Services?
                </h3>

                <div className="mt-2 mb-8 flex justify-center md:justify-start">
                  <div className="w-16 h-1 bg-green-600"></div>
                </div>

                <p className="text-lg text-gray-700 text-center md:text-left">
                  We make AC buying and selling simple and stress-free. Our
                  platform connects you with trusted buyers, sellers, and
                  technicians. From brand-new AC units to used systems,
                  installation, repair, and maintenance — everything is
                  available in one place at affordable prices with professional
                  service support.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="w-100 h-auto rounded-lg flex items-center justify-center">
                  <img
                    src="/Content/Images/ac  (10).jpg"
                    alt="AC Service Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Do You Need Service Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/Content/Images/recomendation.png"
                  alt="AC Technician"
                  className="w-100 h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-green-700 text-3xl font-bold text-center md:text-left">
                  PROFESSIONAL AC SUPPORT
                </h2>

                <h3 className="text-2xl font-extrabold text-gray-800 mt-4 text-center md:text-left">
                  Why Do You Need AC Experts?
                </h3>

                <div className="mt-2 mb-8 flex justify-center md:justify-start">
                  <div className="w-16 h-1 bg-green-600"></div>
                </div>

                <p className="text-lg text-gray-700 text-center md:text-left">
                  AC systems require proper installation, regular maintenance,
                  and timely repair to work efficiently. Our expert technicians
                  ensure your cooling system runs smoothly, saves energy, and
                  lasts longer. Whether it's gas refilling, servicing, or
                  installation — we provide complete professional support at
                  your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Link
          to="https://api.whatsapp.com/send?phone=9203124874272"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="w-8 h-8" />
        </Link>
      </div>
    </>
  );
};

export default LiveQuranTeachers;
