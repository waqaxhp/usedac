import React from "react";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Quran Learning Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/public/Content/Images/Ac logo.png"
              alt="USed Ac Sell Parchase"
              className="w-15 h-12 "
            />
            {/* <h2 className="text-lg font-bold ml-2">Quran Online Lessons</h2> */}
          </div>
          <p className="text-sm leading-relaxed">
            Our AC Selling & Services platform offers a simple and reliable way
            to buy, sell, and service air conditioners. Whether you need a
            brand-new AC, a used unit, or professional repair services, our
            expert technicians and trusted sellers ensure a smooth experience.
            With flexible options and affordable pricing, we make cooling
            solutions accessible and convenient for everyone.
          </p>
        </div>

        {/* Our Courses Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>❄️ NEW AC SALES (Split / Window / Inverter)</li>
            <li>🔄 USED AC BUY & SELL</li>
            <li>🛠️ AC INSTALLATION SERVICE</li>
            <li>⚙️ AC REPAIR & MAINTENANCE</li>
            <li>🧼 AC GENERAL SERVICING & CLEANING</li>
            <li>💨 GAS REFILLING & COOLING SOLUTIONS</li>
            <li>📦 EXCHANGE OLD AC WITH NEW AC</li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT DETAILS</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +923356863576</li>
            <li>📞 +923356863576</li>
            <li>📧 waqaxhp@gmail.com</li>
            <li className="flex gap-3">
              <a href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>

              <a href="https://api.whatsapp.com/send?phone=9203356863576">
                <FaWhatsappSquare />
              </a>
            </li>
          </ul>
          <p className="mt-4">Follow Us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-6 pt-6 text-center text-xs text-gray-300">
        <p>
          Copyright © 2025 quranonlinelessons.com | Powered by
          <a href="https://survexmedia.com" className="text-red-500 mx-1">
            Malik Waqas
          </a>
          Made with <span className="text-green-500">💚</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
