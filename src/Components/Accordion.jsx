import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(4).fill(true), // All items open by default
  );

  const toggleAccordion = (index) => {
    setActiveIndexes((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  };

  const data = [
    {
      question: "Do you buy used AC units in the UAE?",
      answer:
        "Yes, we buy all types of used AC units including split, window, and central systems. We offer competitive prices based on the condition and model.",
    },
    {
      question: "Can I get a price estimate before selling my AC?",
      answer:
        "Absolutely! You can contact us on WhatsApp with your AC details and pictures, and we will provide a quick price estimate.",
    },
    {
      question: "Do you provide AC installation services?",
      answer:
        "Yes, we offer professional AC installation, removal, and maintenance services across the UAE with experienced technicians.",
    },
    {
      question: "Do you sell used or refurbished AC units?",
      answer:
        "Yes, we sell high-quality used and refurbished AC units that are tested and ready for use at affordable prices.",
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
