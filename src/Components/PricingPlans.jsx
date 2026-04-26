import React, { useState } from "react";
import {
  FaDollarSign,
  FaHandsHelping,
  FaPoundSign,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  // State to handle selected currency
  const [currency, setCurrency] = useState("USD");

  // Pricing details for each currency
  const pricingData = {
    USD: [
      {
        title: "Starter",
        days: "2 days/week",
        price: "$39",
        perks: [
          "30 minutes each session",
          "8 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Regular",
        days: "3 days/week",
        price: "$49",
        perks: [
          "30 minutes each session",
          "12 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Gold",
        days: "4 days/week",
        price: "$55",
        perks: [
          "30 minutes each session",
          "16 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Intensive",
        days: "5 days/week",
        price: "$59",
        perks: [
          "30 minutes each session",
          "20 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
    ],
    GBP: [
      {
        title: "Starter",
        days: "2 days/week",
        price: "£35",
        perks: [
          "30 minutes each session",
          "8 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Regular",
        days: "3 days/week",
        price: "£39",
        perks: [
          "30 minutes each session",
          "12 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Gold",
        days: "4 days/week",
        price: "£45",
        perks: [
          "30 minutes each session",
          "16 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
      {
        title: "Intensive",
        days: "5 days/week",
        price: "£48",
        perks: [
          "30 minutes each session",
          "20 lessons per month",
          "Recitation & Islamic Studies",
        ],
      },
    ],
  };

  // Function to render pricing cards
  const renderPricingCards = () => {
    return pricingData[currency].map((plan, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          {plan.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{plan.days}</p>
        <div className="flex items-center space-x-2 mb-4">
          {currency === "USD" ? (
            <FaDollarSign className="text-3xl text-yellow-500" />
          ) : (
            <FaPoundSign className="text-3xl text-yellow-500" />
          )}
          <p className="text-4xl font-bold">{plan.price}</p>
          <p className="text-gray-500 text-sm">/month</p>
        </div>
        <ul className="text-sm text-gray-700 space-y-2 mb-6">
          {plan.perks.map((perk, i) => (
            <li key={i} className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-yellow-500 text-green-900 py-2 rounded-md font-medium hover:bg-yellow-600 transition">
          Register Now
        </button>
      </div>
    ));
  };

  return (
    <>
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 mt-12">
          {/* Header Section */}
          <h1 className="text-center text-3xl font-bold text-green-700 mb-6">
            OUR HADIYA AND TIMES-FRAMES
          </h1>
          <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-4">
            We offer Quran classes in USD, CAD, GBP, and AUD. Choose from our
            pre-set schedules or create your own plan. Flexible options designed
            to fit your schedule!
          </p>
          <p className="text-gray-600 text-center">
            <em>
              Each class will be 30 minutes, and Hifz Class will be 60 minutes.
            </em>
          </p>
          <div className="border-t border-gray-300 my-6"></div>

          {/* Currency Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`${
                currency === "USD"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              } px-4 py-2 rounded-md text-sm flex items-center space-x-2`}
              onClick={() => setCurrency("USD")}
            >
              <FaDollarSign />
              <span>United States Dollars</span>
            </button>
            <button
              className={`${
                currency === "GBP"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              } px-4 py-2 rounded-md text-sm flex items-center space-x-2`}
              onClick={() => setCurrency("GBP")}
            >
              <FaPoundSign />
              <span>United Kingdom Pounds</span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {renderPricingCards()}
          </div>

          {/* Note Section */}
          <p className="text-center text-sm text-red-500 mt-6">
            Prices are negotiable based on your specific requirements!
          </p>
        </div>
      </section>
      <div className="p-6 bg-gray-100">
        {/* Customized Learning Section */}
        <div className="bg-white shadow-lg rounded-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-green-600 flex items-center gap-2 mb-4">
            <FaHandsHelping className="text-green-600" /> Customized Learning &
            Flexible Payment:
          </h2>
          <p className="text-gray-700 mb-4">
            We offer pre-set weekly plans, but if you desire a personalized
            learning experience, let us know! We’ll work with you to create a
            custom plan that fits your needs (In-Shaa-Allah).
          </p>
          <ul className="list-none space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaDollarSign className="text-green-500 mt-1" />
              <div>
                <strong>Affordable Rates & Clear Policies:</strong> Our Quran
                learning fees are charged on a monthly basis at an affordable
                rate. Public holidays and Eid holidays are included in the
                monthly fees and are non-refundable.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <strong>Discounts & Payment Options:</strong> We understand
                financial constraints. Low-income families are eligible for a
                10% discount on their monthly fees. To ensure a smooth
                transition, your first payment will be collected after your free
                trial and upon joining regular classes. We accept secure
                payments through 2Checkout.com Inc, PayPal, Credit Card, and
                Mastercard.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MdPolicy className="text-green-500 mt-1" />
              <div>
                <strong>Transparent Communication:</strong> There’s no
                registration fee for your first enrollment. We believe in
                transparency, so please note that Eid holidays are included in
                the monthly fees, and refunds are not offered for these days.
              </div>
            </li>
          </ul>
        </div>

        {/* Refund Policy Section */}
        <div className="bg-white shadow-lg rounded-md p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-yellow-500 flex items-center gap-2 mb-4">
              <MdPolicy className="text-yellow-500" /> Refund Policy
            </h2>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1" />
                <div>
                  <strong>Pre-Class Withdrawal:</strong> If you withdraw from
                  your Quran learning program before the commencement of
                  classes, you will receive a full refund of your tuition fees.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1" />
                <div>
                  <strong>Post-Class Withdrawal:</strong> Once classes have
                  begun, refunds are generally not granted. However, in
                  exceptional circumstances where we fail to provide the
                  agreed-upon classes due to our negligence, we may offer a
                  partial refund after deducting a processing fee.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-yellow-500 mt-1" />
                <div>
                  <strong>Class Cancellations & Transfers:</strong> If you need
                  to cancel or reschedule classes due to personal reasons, we
                  may allow you to transfer the remaining balance to the
                  following month. However, if the processing fee for the refund
                  exceeds the remaining balance, we cannot issue a refund.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="/Content/Images/Price-page.png"
              alt="Refund Policy Illustration"
              className="w-full h-auto rounded-md"
            />
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
    </>
  );
};

export default PricingPlans;
