import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { FaWhatsapp, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const [currency, setCurrency] = useState("AED");

  const pricingData = {
    USD: [
      {
        title: "Split AC",
        price: "$120 - $350",
        type: "Used - Good Condition",
        perks: [
          "Fully tested units",
          "Installation available",
          "Best market price",
        ],
      },
      {
        title: "Window AC",
        price: "$80 - $200",
        type: "Used - Fair Condition",
        perks: ["Budget friendly", "Quick pickup", "Instant deal"],
      },
      {
        title: "Inverter AC",
        price: "$250 - $600",
        type: "Refurbished / Like New",
        perks: ["Energy saving", "Warranty options", "Top brands"],
      },
    ],
    AED: [
      {
        title: "Split AC",
        price: "AED 400 - 1300",
        type: "Used - Good Condition",
        perks: [
          "Fully tested units",
          "Installation available",
          "Best market price",
        ],
      },
      {
        title: "Window AC",
        price: "AED 250 - 700",
        type: "Used - Fair Condition",
        perks: ["Budget friendly", "Quick pickup", "Instant deal"],
      },
      {
        title: "Inverter AC",
        price: "AED 900 - 2200",
        type: "Refurbished / Like New",
        perks: ["Energy saving", "Warranty options", "Top brands"],
      },
    ],
  };

  return (
    // <div className="bg-gray-50 min-h-screen py-10 px-4">
    <div className="bg-gray-50 min-h-screen py-10 px-4 pt-24">
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          AC Buying & Selling Prices in UAE
        </h1>

        <p className="text-gray-600 text-sm md:text-base">
          Get the best deals for used, refurbished, and new AC units across the
          UAE. We offer{" "}
          <span className="font-semibold text-green-600">
            fast service, fair pricing, and trusted deals
          </span>{" "}
          for all AC types.
        </p>

        <div className="flex justify-center items-center gap-2 mt-4 text-green-700">
          <FaMoneyBillWave />
          <span className="text-sm font-medium">
            Instant cash offers for used AC units
          </span>
        </div>
      </div>

      {/* CURRENCY SWITCH */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-5 py-2 rounded-full font-medium transition ${
            currency === "USD" ? "bg-green-700 text-white" : "bg-white border"
          }`}
        >
          USD
        </button>

        <button
          onClick={() => setCurrency("AED")}
          className={`px-5 py-2 rounded-full font-medium transition ${
            currency === "AED" ? "bg-green-700 text-white" : "bg-white border"
          }`}
        >
          AED
        </button>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center">
        {pricingData[currency].map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-5xl mx-auto mt-12 bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <FaTools /> Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
          <p>✔ Best AC buying & selling rates in UAE</p>
          <p>✔ Instant WhatsApp response & deals</p>
          <p>✔ Free inspection & pickup service</p>
          <p>✔ Trusted used AC dealers</p>
          <p>✔ Same-day service available</p>
          <p>✔ Professional installation support</p>
        </div>
      </div>

      {/* NOTE SECTION */}
      <p className="text-center text-red-500 text-sm mt-6">
        * Prices may vary depending on condition, brand, and location
      </p>

      {/* WHATSAPP FLOAT */}
      <Link
        to="https://api.whatsapp.com/send?phone=9203124874272"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </Link>
    </div>
  );
};

export default PricingPlans;
