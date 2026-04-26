import React, { useState, useEffect } from "react";

const PricingCard = () => {
  const [pricingData, setPricingData] = useState([]);

  // Fetch the data from the JSON file
  useEffect(() => {
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setPricingData(data.Pricing)) // Access the "Pricing" array from the JSON
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen p-8 bg-gray-100">
      {pricingData.map((plan, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg w-full sm:w-72 lg:w-1/3 xl:w-1/4 p-6 m-4 border"
        >
          <div className="text-4xl font-bold text-gray-800">{`$${plan.price}`}</div>
          <div className="text-sm text-gray-500">{plan.duration}</div>
          <h3 className="text-xl font-semibold my-4">{plan.plan}</h3>
          <ul className="text-gray-700 mb-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="list-none">
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
