// import React, { useState, useEffect } from "react";

// const PricingCard = () => {
//   const [pricingData, setPricingData] = useState([]);

//   // Fetch the data from the JSON file
//   useEffect(() => {
//     fetch("/Data/Data.json")
//       .then((response) => response.json())
//       .then((data) => setPricingData(data.Pricing)) // Access the "Pricing" array from the JSON
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center items-center min-h-screen p-8 bg-gray-100">
//       {pricingData.map((plan, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-lg rounded-lg w-full sm:w-72 lg:w-1/3 xl:w-1/4 p-6 m-4 border"
//         >
//           <div className="text-4xl font-bold text-gray-800">{`$${plan.price}`}</div>
//           <div className="text-sm text-gray-500">{plan.duration}</div>
//           <h3 className="text-xl font-semibold my-4">{plan.plan}</h3>
//           <ul className="text-gray-700 mb-4">
//             {plan.features.map((feature, idx) => (
//               <li key={idx} className="list-none">
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           <button className="mt-6 px-8 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
//             {plan.buttonText}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PricingCard;
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
