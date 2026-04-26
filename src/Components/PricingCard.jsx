
import React from "react";
import { FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const PricingCard = ({ plan }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 m-4 w-full sm:w-72 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        {plan.title}
      </h3>

      <p className="text-sm text-gray-500 mb-2">{plan.type}</p>

      <div className="flex items-center gap-2 mb-4">
        <FaMoneyBillWave className="text-green-600" />
        <p className="text-2xl font-bold text-gray-800">{plan.price}</p>
      </div>

      <ul className="space-y-2 text-gray-700 mb-4">
        {plan.perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            {perk}
          </li>
        ))}
      </ul>

      <a
        href="https://api.whatsapp.com/send?phone=9203124874272"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
      >
        Buy / Sell on WhatsApp
      </a>
    </div>
  );
};

export default PricingCard;
