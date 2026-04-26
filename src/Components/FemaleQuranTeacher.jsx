import React from "react";
import { FaFemale } from "react-icons/fa";

const FemaleQuranTeacher = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* Header */}
        <h1 className="flex items-center justify-center text-3xl font-bold text-green-700 mb-6">
          <FaFemale className="mr-2 text-green-700" size={30} />
          Female Quran Teacher
        </h1>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Text Section - Top */}
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            FEMALE QURAN TEACHER
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Learn the Quran from dedicated female teachers. Our online platform
            offers personalized Quran lessons taught by experienced female
            instructors who specialize in <strong>Tajweed</strong> and{" "}
            <strong>Tarteel</strong>.
          </p>

          {/* Image Section */}
          <div className="flex justify-center my-6">
            <img
              src="/Content/Images/femail-teacher.png"
              alt="Female Quran Teacher Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Text Section - Bottom */}
          <p className="text-gray-700 leading-relaxed">
            Whether you're a beginner or seeking to improve your skills, our
            teachers can provide guidance in <strong>English</strong>,{" "}
            <strong>Urdu</strong>, <strong>Hindi</strong>, or{" "}
            <strong>Arabic</strong>. Join us for free trial lessons and discover
            the transformative power of learning the Quran with a qualified
            female tutor.
          </p>

          {/* Horizontal Separator */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Emphasized Text */}
          <p className="text-gray-800 text-center font-medium">
            Learn the Quran from experienced female teachers. Our online
            platform offers personalized lessons taught by qualified instructors
            who specialize in Tajweed and Tarteel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FemaleQuranTeacher;
