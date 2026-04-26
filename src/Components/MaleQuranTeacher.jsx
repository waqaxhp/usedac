import React from "react";
import { FaMale, FaWhatsapp } from "react-icons/fa";
import FemaleQuranTeacher from "./FemaleQuranTeacher";
import { Link } from "react-router-dom";

const MaleQuranTeacher = () => {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 mt-12">
          {/* Header */}
          <h1 className="flex items-center justify-center text-3xl font-bold text-green-800 mb-6">
            <FaMale className="mr-2 text-green-800" size={30} />
            Male Quran Teacher
          </h1>

          {/* Content Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Text Section - Top */}
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              MALE QURAN TEACHER
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Learn the Quran from dedicated male teachers. Our online platform
              offers personalized Quran lessons taught by experienced male
              instructors who specialize in <strong>Tajweed</strong> and{" "}
              <strong>Tarteel</strong>.
            </p>

            {/* Image Section */}
            <div className="flex justify-center my-6">
              <img
                src="/Content/Images/Mail-teacher.png"
                alt="Male Quran Teacher Illustration"
                className="w-full max-w-md"
              />
            </div>

            {/* Text Section - Bottom */}
            <p className="text-gray-700 leading-relaxed">
              Whether you're a beginner or seeking to improve your skills, our
              teachers can provide guidance in <strong>English</strong>,{" "}
              <strong>Urdu</strong>, <strong>Hindi</strong>, or{" "}
              <strong>Arabic</strong>. Join us for free trial lessons and
              discover the transformative power of learning the Quran with a
              qualified male tutor.
            </p>

            {/* Horizontal Separator */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Emphasized Text */}
            <p className="text-gray-800 text-center font-medium">
              Learn the Quran from experienced male teachers. Our online
              platform offers personalized lessons taught by qualified
              instructors who specialize in Tajweed and Tarteel.
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
