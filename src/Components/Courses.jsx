import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Split AC",
    image: "/Content/Images/ac  (1).jpg",
  },
  {
    id: 2,
    title: "Window AC",
    image: "/Content/Images/ac  (2).jpg",
  },
  {
    id: 3,
    title: "Central AC",
    image: "/Content/Images/ac  (3).jpg",
  },
  {
    id: 4,
    title: "Inverter AC",
    image: "/Content/Images/ac  (4).jpg",
  },
  {
    id: 5,
    title: "Used AC Units",
    image: "/Content/Images/ac  (5).jpg",
  },
  {
    id: 6,
    title: "AC Installation & Services",
    image: "/Content/Images/ac  (6).jpg",
  },
];

const Courses = () => {
  return (
    <>
      <section className="py-12 bg-gray-50 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 mt-12">
          Our AC Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
          {/* {courses.map((course) => (
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
          ))} */}
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {item.title}
              </h3>
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                View Details →
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
