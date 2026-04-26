import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Noorani Qaida",
    image: "/Content/Images/c1.png",
  },
  {
    id: 2,
    title: "Tajweed e Quran",
    image: "/Content/Images/c2.png",
  },
  {
    id: 3,
    title: "Islamic Studies",
    image: "/Content/Images/c3.png",
  },
  {
    id: 4,
    title: "Quran Translation",
    image: "/Content/Images/c4.png",
  },
  {
    id: 5,
    title: "Arabic Language",
    image: "/Content/Images/c5.png",
  },
  {
    id: 6,
    title: "Quran Memorization",
    image: "/Content/Images/c5.png",
  },
];

const Courses = () => {
  return (
    <>
      <section className="py-12 bg-gray-50 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 mt-12">
          Our Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 text-center"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {course.title}
              </h3>
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
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

export default Courses;
