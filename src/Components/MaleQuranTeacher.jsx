import React from "react";
import { FaMale, FaWhatsapp } from "react-icons/fa";
import FemaleQuranTeacher from "./FemaleQuranTeacher";
import { Link } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";

const MaleQuranTeacher = () => {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 mt-12">
          {/* Header */}
          <h1 className="flex items-center justify-center text-3xl font-bold text-green-800 mb-6">
            <GiAutoRepair className="mr-2 text-green-800" size={30} />
            PROFESSIONAL MECHANIC SERVICES
          </h1>

          {/* Content Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Text Section - Top */}
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              MECHANIC SERVICES
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Get expert mechanic services from experienced professionals. Our
              platform connects you with skilled mechanics who specialize in
              vehicle repair, maintenance, and . <strong>diagnostics</strong>{" "}
              and <strong>troubleshooting</strong>.
            </p>

            {/* Image Section */}
            <div className="flex justify-center my-6">
              {/* <img
                src="/Content/Images/ac  (2).jpg"
                alt="Female Quran Teacher Illustration"
                className="w-full max-w-md"
              /> */}
              <img
                src="/Content/Images/ac  (6).jpg"
                alt="Male Quran Teacher Illustration"
                className="w-full max-w-md"
              />
            </div>

            {/* Text Section - Bottom */}
            <p className="text-gray-700 leading-relaxed">
              Whether you need car servicing, engine repair, oil change, or full
              diagnostics, our certified mechanics are here to help. We provide
              reliable and affordable services for all vehicle types. Contact us
              for quick assistance and expert solutions.
            </p>

            {/* Horizontal Separator */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Emphasized Text */}
            <p className="text-gray-800 text-center font-medium">
              Trusted mechanic services for all your vehicle needs. Skilled
              professionals ready to assist you anytime.
            </p>
          </div>
        </div>
      </section>

      <FemaleQuranTeacher />
      <Link
        to="https://api.whatsapp.com/send?phone=9203124874272"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp alt="WhatsApp" className="w-8 h-8" />
      </Link>
    </>
  );
};

export default MaleQuranTeacher;
