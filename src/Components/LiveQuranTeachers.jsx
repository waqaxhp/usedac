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
              Live Quran Teachers offers personalized online classes for
              students of all ages and backgrounds..
            </h1>
            <p className="mt-4 text-lg">
              At Live Quran Teachers, we ignite a love for the Quran. Our online
              platform connects you with qualified instructors for personalized
              Quran learning, fostering understanding and spiritual growth for
              students of all ages.
            </p>
            <button className="mt-6 bg-green-600 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Let’s Discuss
            </button>
          </div>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/Content/Images/About us.jpg')`, // Replace with your background image path
            }}
          ></div>
        </div>

        {/* Why Choose Section */}
      </div>
      <div className="bg-gray-50">
        {/* Why Choose Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-green-700 text-3xl font-bold text-center md:text-left">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </h2>
                <h3 className="text-2xl font-extrabold text-gray-800 mt-4 text-center md:text-left">
                  Why Choose Live Quran Teacher's?
                </h3>
                <div className="mt-2 mb-8 flex justify-center md:justify-start">
                  <div className="w-16 h-1 bg-green-600"></div>
                </div>
                <p className="text-lg text-gray-700 text-center md:text-left">
                  Unveiling the Quran’s depths has never been easier. Live Quran
                  Teachers bridges the gap between geography and knowledge,
                  offering a personalized online platform for Quran learning.
                  Master recitation, delve into Islamic studies, or embark on a
                  Hifz journey – all guided by expert instructors at your own
                  pace. Ignite your faith and unlock the Quran’s transformative
                  power with Live Quran Teachers.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="w-100 h-auto rounded-lg flex items-center justify-center ">
                  <img
                    src="/Content/Images/Package-boock.png"
                    alt="Quran Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Do You Need a Tutor Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/Content/Images/recomendation.png"
                  alt="Tutor"
                  className="w-100 h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-green-700 text-3xl font-bold text-center md:text-left">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </h2>
                <h3 className="text-2xl font-extrabold text-gray-800 mt-4 text-center md:text-left">
                  Why Do You Need A Tutor?
                </h3>
                <div className="mt-2 mb-8 flex justify-center md:justify-start">
                  <div className="w-16 h-1 bg-green-600"></div>
                </div>
                <p className="text-lg text-gray-700 text-center md:text-left">
                  A Quran tutor can provide invaluable guidance and support on
                  your journey to understanding and mastering the Holy Quran.
                  Whether you’re a beginner seeking to learn the basics or an
                  advanced student aiming to perfect your recitation and
                  Tajweed, a Quran tutor can offer personalized instruction
                  tailored to your needs. They can help you overcome challenges,
                  answer your questions, and ensure that you’re on the right
                  path to achieving your Quranic goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="https://api.whatsapp.com/send?phone=9203124874272"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp alt="WhatsApp" className="w-8 h-8" />
        </Link>
      </div>
      <QuranTutoring />
    </>
  );
};

export default LiveQuranTeachers;
