import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(4).fill(true) // All items open by default
  );

  const toggleAccordion = (index) => {
    setActiveIndexes((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const data = [
    {
      question: "What qualifications do your teachers have?",
      answer:
        "Our teachers are highly qualified and experienced in teaching the Quran. They have a deep understanding of the Quran and its recitation.",
    },
    {
      question: "Can I try a free class before committing?",
      answer:
        "Yes, we offer free 3 days  trial lessons so you can experience our teaching methods before enrolling in a full course.",
    },
    {
      question: "How do the classes work?",
      answer:
        "Our classes are conducted live online using video conferencing technology. You will have the opportunity to interact with your teacher in real-time.",
    },
    {
      question: "Do you have female teachers in your classes?",
      answer:
        "Yes, we have female teachers available for Quran classes. Our team of qualified teachers includes both male and female instructors to cater to the preferences of our students.",
    },
  ];

  return (
    <>
      <div className="bg-white px-6 py-12">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-700 mb-6 mt-12">
          Find Your Answers Here
        </h2>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-16 bg-green-600"></div>
          <div className="h-1 w-8 mx-2 bg-green-400"></div>
          <div className="h-1 w-16 bg-green-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className={`w-full text-left px-4 py-3 font-bold text-white transition-colors ${
                  activeIndexes[index] ? "bg-green-800" : "bg-green-700"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="float-right">
                  {activeIndexes[index] ? "↑" : "↓"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeIndexes[index] ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-gray-100 px-4 py-3 text-gray-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
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
    </>
  );
};

export default Accordion;
